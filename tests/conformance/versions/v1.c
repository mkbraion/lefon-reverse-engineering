#include <stdio.h>
__attribute__((noinline, used)) int lefon_version_leaf(void) {
  puts("LEFON_VERSION_ONE");
  return 1;
}
__attribute__((noinline, used)) int lefon_version_entry(void) {
  return lefon_version_leaf();
}
int main(void) { return lefon_version_entry() == 1 ? 0 : 1; }
