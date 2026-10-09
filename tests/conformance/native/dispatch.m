#import <Foundation/Foundation.h>

@protocol LefonDispatchProtocol
- (void)performAction:(id)sender;
@optional
- (int)optionalFixtureValue;
@end

@interface LefonDispatchFixture : NSObject <LefonDispatchProtocol> {
  int state;
}
@property(nonatomic, copy) NSString *fixtureName;
@property NSInteger atomicValue;
- (void)performAction:(id)sender;
+ (int)fixtureVersion;
@end
@implementation LefonDispatchFixture
- (void)performAction:(id)sender { state += sender == nil ? 1 : 2; }
+ (int)fixtureVersion { return 1; }
@end

@interface NSString (LefonDispatchAdditions)
- (NSUInteger)lefonFixtureLength;
@end
@implementation NSString (LefonDispatchAdditions)
- (NSUInteger)lefonFixtureLength { return self.length; }
@end
int main(void) { return 0; }
