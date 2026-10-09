// Keep secondary imported entry labels and a non-entry control in one function.
#if defined(__APPLE__)
#define LEFON_SYMBOL(name) "_" name
#else
#define LEFON_SYMBOL(name) name
#endif

volatile int lefon_xrefs_data = 17;
__attribute__((used)) volatile int lefon_xrefs_unreferenced = 41;

__attribute__((noinline, used)) int lefon_alias_target(void) {
  int value = lefon_xrefs_data;
  // Preserve normal function-start metadata. Imported symbols at instruction
  // boundaries can become procedure entries, so keep this label inside a NOP.
#if defined(__aarch64__)
  __asm__ volatile(".globl " LEFON_SYMBOL("lefon_interior") "\n"
                   ".byte 0x1f\n"
                   LEFON_SYMBOL("lefon_interior") ":\n"
                   ".byte 0x20,0x03,0xd5\n" : : "r"(value));
#elif defined(__x86_64__)
  __asm__ volatile(".byte 0x0f\n"
                   ".globl " LEFON_SYMBOL("lefon_interior") "\n"
                   LEFON_SYMBOL("lefon_interior") ":\n"
                   ".byte 0x1f,0x00\n" : : "r"(value));
#else
#error "The Ghidra entry-alias fixture supports only x86_64 and arm64"
#endif
  return value;
}

__asm__(".globl " LEFON_SYMBOL("lefon_entry_alias") "\n"
        ".set " LEFON_SYMBOL("lefon_entry_alias") ", " LEFON_SYMBOL("lefon_alias_target") "\n"
        // A bare hexadecimal identifier must still resolve as an entry label.
        ".globl dead\n.set dead, " LEFON_SYMBOL("lefon_alias_target") "\n");

int main(void) { return lefon_alias_target(); }
