import Darwin

protocol LEFONProtocol { func execute() -> Int }
struct LEFONRecord { let value: Int }
enum LEFONState { case ready, finished }
final class LEFONService: LEFONProtocol {
  @inline(never) func execute() -> Int { print("LEFON_SWIFT_EXECUTE"); return 42 }
}
extension LEFONRecord { @inline(never) func doubled() -> Int { value * 2 } }
let service = LEFONService()
exit(service.execute() == 42 ? 0 : 1)
