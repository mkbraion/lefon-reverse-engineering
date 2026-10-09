#include <stdlib.h>
#include <string.h>
#include <errno.h>

extern void *__tls_get_addr(void *);
extern int *__errno_location(void);
extern void lefon_unknown_stop(void);
extern void _Unwind_Resume(void *) __attribute__((noreturn));
volatile unsigned long lefon_after_call;

void *lefon_malloc(size_t n) {
    void *p = malloc(n);
    lefon_after_call++;
    return p;
}
void *lefon_malloc_adjacent(size_t n) {
    void *p = malloc(n);
    lefon_after_call++;
    return p;
}
__attribute__((visibility("hidden"))) void *lefon_tls(void *p) {
    void *value = __tls_get_addr(p);
    lefon_after_call++;
    return value;
}
__attribute__((visibility("hidden"))) void *lefon_tls_chain(void *p) {
    void *value = lefon_tls(p);
    lefon_after_call++;
    return value;
}
void *lefon_tls_outer(void *p) {
    void *value = lefon_tls_chain(p);
    lefon_after_call++;
    return value;
}
void *lefon_memcpy(void *out, const void *in, size_t n) {
    void *value = memcpy(out, in, n);
    lefon_after_call++;
    return value;
}
void *lefon_memset(void *out, int c, size_t n) {
    void *value = memset(out, c, n);
    lefon_after_call++;
    return value;
}
size_t lefon_strlen(const char *p) {
    size_t value = strlen(p);
    lefon_after_call++;
    return value;
}
int *lefon_errno(void) {
    int *p = __errno_location();
    lefon_after_call++;
    return p;
}
void lefon_unknown(void) {
    lefon_unknown_stop();
    lefon_after_call++;
}
void lefon_abort(void) { abort(); }
void lefon_unwind(void *p) { _Unwind_Resume(p); }
void lefon_local_stop(void) { __builtin_trap(); }
int lefon_local_return(void) { return 1658; }
