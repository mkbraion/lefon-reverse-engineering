#include <stdio.h>

volatile int lefon_c_global = 7;

#define LEFON_LONG_CHUNK "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
#define LEFON_LONG_256 LEFON_LONG_CHUNK LEFON_LONG_CHUNK LEFON_LONG_CHUNK LEFON_LONG_CHUNK
#define LEFON_LONG_1024 LEFON_LONG_256 LEFON_LONG_256 LEFON_LONG_256 LEFON_LONG_256
__attribute__((noinline, used)) void lefon_long_literal_procedure(void) {
  puts("LEFON_LONG_LITERAL_" LEFON_LONG_1024 LEFON_LONG_1024 LEFON_LONG_1024 LEFON_LONG_1024 "needle");
  puts("LEFON_UTF8_é_😀");
  puts("LEFON_ESCAPED_\"\\line\nend\t\r");
  puts("LEFON_LITERAL_BACKSLASH_\\n");
  puts("LEFON_LITERAL_…");
  puts("LEFON_LATIN1_\xff");
}

__attribute__((noinline, used)) int lefon_leaf(int value) {
  puts("LEFON_C_LEAF");
  return value + lefon_c_global;
}

__attribute__((noinline, used)) int lefon_branch(int value) {
  return value > 3 ? lefon_leaf(value) : lefon_leaf(-value);
}

__attribute__((noinline, used)) int lefon_entry(void) {
  puts("LEFON_C_ENTRY");
  /* Give the native locals oracle explicit stack storage. */
  volatile int input = 5;
  return lefon_branch(input);
}

int main(void) { return lefon_entry() == 12 ? 0 : 1; }

__attribute__((noinline, used)) int lefon_cycle_b(int value);

__attribute__((noinline, used)) int lefon_cycle_a(int value) {
  return value > 0 ? lefon_cycle_b(value - 1) : value;
}

__attribute__((noinline, used)) int lefon_cycle_b(int value) {
  return value > 0 ? lefon_cycle_a(value - 1) : value;
}
