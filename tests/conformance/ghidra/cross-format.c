typedef int (*lefon_cross_callback)(int);

volatile int lefon_cross_global = 7;
const volatile char lefon_cross_message[] = "LEFON_GHIDRA_CROSS_FORMAT";

__attribute__((noinline, used)) int lefon_cross_leaf(int value) {
  return value + lefon_cross_global + lefon_cross_message[0] - 'R';
}

__attribute__((noinline, used)) int lefon_cross_branch(int value) {
  /* A volatile-dependent loop keeps this callee multi-block at every
     optimization level: newer clang folds a symmetric if/else of tail calls
     into a conditional negate, and cross-format verification requires a
     recovered multi-block callee. */
  int adjusted = value > 10 ? value + 1 : -value;
  while (adjusted > 100) {
    adjusted -= lefon_cross_global;
  }
  return lefon_cross_leaf(adjusted);
}

__attribute__((noinline, used)) int lefon_cross_indirect(
    lefon_cross_callback callback, int value) {
  return callback(value);
}

#define LEFON_CROSS_SWITCH_CASE(case_value) \
  case case_value:                        \
    return lefon_cross_leaf(payload + case_value)

__attribute__((noinline, used)) int lefon_cross_dense_switch(unsigned int selector,
                                                           int payload) {
  switch (selector) {
    LEFON_CROSS_SWITCH_CASE(0);
    LEFON_CROSS_SWITCH_CASE(1);
    LEFON_CROSS_SWITCH_CASE(2);
    LEFON_CROSS_SWITCH_CASE(3);
    LEFON_CROSS_SWITCH_CASE(4);
    LEFON_CROSS_SWITCH_CASE(5);
    LEFON_CROSS_SWITCH_CASE(6);
    LEFON_CROSS_SWITCH_CASE(7);
    LEFON_CROSS_SWITCH_CASE(8);
    LEFON_CROSS_SWITCH_CASE(9);
    LEFON_CROSS_SWITCH_CASE(10);
    LEFON_CROSS_SWITCH_CASE(11);
    LEFON_CROSS_SWITCH_CASE(12);
    LEFON_CROSS_SWITCH_CASE(13);
    LEFON_CROSS_SWITCH_CASE(14);
    LEFON_CROSS_SWITCH_CASE(15);
    LEFON_CROSS_SWITCH_CASE(16);
    LEFON_CROSS_SWITCH_CASE(17);
    LEFON_CROSS_SWITCH_CASE(18);
    LEFON_CROSS_SWITCH_CASE(19);
    LEFON_CROSS_SWITCH_CASE(20);
    LEFON_CROSS_SWITCH_CASE(21);
    LEFON_CROSS_SWITCH_CASE(22);
    LEFON_CROSS_SWITCH_CASE(23);
    LEFON_CROSS_SWITCH_CASE(24);
    LEFON_CROSS_SWITCH_CASE(25);
    LEFON_CROSS_SWITCH_CASE(26);
    LEFON_CROSS_SWITCH_CASE(27);
    LEFON_CROSS_SWITCH_CASE(28);
    LEFON_CROSS_SWITCH_CASE(29);
    LEFON_CROSS_SWITCH_CASE(30);
    LEFON_CROSS_SWITCH_CASE(31);
    LEFON_CROSS_SWITCH_CASE(32);
    LEFON_CROSS_SWITCH_CASE(33);
    LEFON_CROSS_SWITCH_CASE(34);
    LEFON_CROSS_SWITCH_CASE(35);
    LEFON_CROSS_SWITCH_CASE(36);
    LEFON_CROSS_SWITCH_CASE(37);
    LEFON_CROSS_SWITCH_CASE(38);
    LEFON_CROSS_SWITCH_CASE(39);
    default:
      return -1;
  }
}

#undef LEFON_CROSS_SWITCH_CASE

__attribute__((noinline, used, visibility("default"))) int lefon_cross_entry(void) {
  return lefon_cross_branch(35) + lefon_cross_indirect(lefon_cross_leaf, 0);
}

__attribute__((used, visibility("default"))) void lefon_cross_start(void) {
  volatile int result = lefon_cross_entry();
  (void)result;
  for (;;) {
  }
}
