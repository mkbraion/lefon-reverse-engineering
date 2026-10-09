#ifdef _WIN32
#define LEFON_EXPORT __declspec(dllexport)
#define LEFON_NOINLINE __declspec(noinline)
#else
#define LEFON_EXPORT __attribute__((visibility("default")))
#define LEFON_NOINLINE __attribute__((noinline))
#endif

LEFON_EXPORT LEFON_NOINLINE int lefon_fixture_add(int left, int right) {
  return left + right + 7;
}

int main(void) {
  return lefon_fixture_add(11, 24);
}
