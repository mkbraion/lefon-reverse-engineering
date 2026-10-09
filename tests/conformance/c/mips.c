/* Freestanding, source-owned static-analysis fixture. Never executed by LEFON. */
volatile unsigned int lefon_mips_global = 7;
const char lefon_mips_marker[] = "lefon-mips-source-owned-fixture";

__attribute__((noinline)) unsigned int lefon_mips_leaf(unsigned int value)
{
    return value * 3u + lefon_mips_global;
}

__attribute__((noinline)) unsigned int lefon_mips_entry(unsigned int selector)
{
    unsigned int adjusted = selector > 10u ? selector : selector + 1u;
    return lefon_mips_leaf(adjusted) + (unsigned char)lefon_mips_marker[0];
}
