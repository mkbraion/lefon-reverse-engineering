#import <Foundation/Foundation.h>
@protocol LEFONWidgetDelegate <NSObject>
- (void)widgetDidFinish;
@end
@interface LEFONWidget : NSObject
@property(nonatomic, weak) id<LEFONWidgetDelegate> delegate;
- (BOOL)performAction:(NSString *)action error:(NSError **)error;
@end
@implementation LEFONWidget
- (BOOL)performAction:(NSString *)action error:(NSError **)error {
  NSLog(@"LEFON_OBJC_ACTION:%@", action);
  return action.length > 0;
}
@end
int main(void) {
  @autoreleasepool {
    Protocol *protocol = @protocol(LEFONWidgetDelegate);
    NSLog(@"%@", NSStringFromProtocol(protocol));
    NSLog(@"LEFON_UTF16_é_😀");
    NSLog(@"LEFON_UTF16_ESCAPED_é_\"\\line\nend\t\r");
    NSLog(@"\nREA_UTF16_LEADING_é");
    return [[[LEFONWidget alloc] init] performAction:@"run" error:0] ? 0 : 1;
  }
}
