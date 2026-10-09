import Foundation

final class LefonArchiveRecord: NSObject, NSCoding {
  var link: LefonArchiveRecord?
  override init() { super.init() }
  required init?(coder: NSCoder) { super.init() }
  func encode(with coder: NSCoder) {
    coder.encode(link, forKey: "cycle")
    coder.encode(Data([0, 1, 2, 255]), forKey: "payload")
    coder.encodeConditionalObject(nil, forKey: "conditional")
  }
}
let record = LefonArchiveRecord()
record.link = record
let data = try NSKeyedArchiver.archivedData(withRootObject: [record, record] as NSArray, requiringSecureCoding: false)
try data.write(to: URL(fileURLWithPath: CommandLine.arguments[1]))
