// Emit C++ ABI names with the host C compiler; no C++ runtime is required.
#if defined(__APPLE__)
#define LEFON_CPP_SYMBOL(name) "_" name
#else
#define LEFON_CPP_SYMBOL(name) name
#endif

volatile int lefon_namespace_alpha_value
    __asm__(LEFON_CPP_SYMBOL("_ZN5alpha5valueE")) = 3;
volatile int lefon_namespace_nested_value
    __asm__(LEFON_CPP_SYMBOL("_ZN5outer5inner5valueE")) = 1;

volatile int lefon_duplicate_label_a = 3;
volatile int lefon_duplicate_label_b = 4;

__attribute__((noinline, used)) int lefon_duplicate_function_a(int value) {
  return value + 1;
}

__attribute__((noinline, used)) int lefon_duplicate_function_b(int value) {
  return value + 2;
}

__attribute__((noinline, used)) int lefon_namespace_alpha(int value)
    __asm__(LEFON_CPP_SYMBOL("_ZN5alpha4sameEi"));
__attribute__((noinline, used)) int lefon_namespace_beta(int value)
    __asm__(LEFON_CPP_SYMBOL("_ZN4beta4sameEi"));
__attribute__((noinline, used)) int lefon_namespace_nested(int value)
    __asm__(LEFON_CPP_SYMBOL("_ZN5outer5inner4sameEi"));

int lefon_namespace_alpha(int value) { return value + lefon_namespace_alpha_value; }
int lefon_namespace_beta(int value) { return value * 2; }
int lefon_namespace_nested(int value) { return value - lefon_namespace_nested_value; }

int main(void) {
  return lefon_namespace_alpha(1) + lefon_namespace_beta(2) +
         lefon_namespace_nested(3);
}
