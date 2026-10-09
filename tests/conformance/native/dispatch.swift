public protocol LefonWitnessFixtureProtocol { func fixtureValue() -> Int }
public struct LefonWitnessFixture: LefonWitnessFixtureProtocol {
  public init() {}
  public func fixtureValue() -> Int { 17 }
}
@_cdecl("lefon_witness_fixture_entry")
public func fixtureEntry() -> Int { LefonWitnessFixture().fixtureValue() }

public class LefonVtableFixture {
  public init() {}
  public func fixtureValue() -> Int { 23 }
}
