// A real initialized data range, with independently recognizable endpoints.
volatile unsigned char lefon_large_payload[LEFON_PAYLOAD_BYTES] = {
    [0] = 0x5a, [LEFON_PAYLOAD_BYTES - 1] = 0xa5};

__attribute__((noinline, used)) int lefon_large_entry(void) {
  return lefon_large_payload[0] + lefon_large_payload[LEFON_PAYLOAD_BYTES - 1];
}

int main(void) { return lefon_large_entry(); }
