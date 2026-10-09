#include <stdio.h>
__attribute__((noinline, used)) int lefon_version_leaf(void) {
  puts("LEFON_VERSION_TWO");
  return 2;
}
__attribute__((noinline, used)) int lefon_added(void) { return 40; }
__attribute__((noinline, used)) int lefon_version_entry(void) {
  return lefon_version_leaf() + lefon_added();
}
int main(void) { return lefon_version_entry() == 42 ? 0 : 1; }
