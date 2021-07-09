#include <fcntl.h>
#include <string.h>
#include <unistd.h>

int k;
int main(void) {

  while (true) {
    for (k = 0; k < 17; k++) {
      switch (k) {
      case 0:
          //EXAMPLE FOR KEY Z ON MacOS
          //CIRCLE PAD DOWN
          CGEventCreateKeyboardEvent (NULL, (CGKeyCode)56, 1);
          break;
      }
    }
  }

  return 0;
}

