// Prefer the original one
import java.util.*;

public class Main {

  public static void main(String[] args) {
    int instream[] = {
      7,
      0,
      1,
      2,
      0,
      3,
      0,
      4,
      2,
      3,
      0,
      3,
      2,
      1,
      2,
      0,
      1,
      7,
      0,
      1,
    };
    int pgfs = 0, hits = 0;
    int frames = 4;
    int l = instream.length;
    int m, n, s, cnt = 0, pt = 0;
    int temp[] = new int[frames];
    System.out.println("Incoming \t Frame1 \t Frame2 \t Frame3 \t Frame4");
    for (m = 0; m < frames; m++) {
      temp[m] = -1;
    }
    for (m = 0; m < l; m++) {
      s = 0;
      for (n = 0; n < frames; n++) {
        if (temp[n] == instream[m]) {
          pgfs--;
          s++;
          hits++;
        }
      }
      pgfs++;
      if ((pgfs <= frames) && (s == 0)) {
        temp[m] = instream[m];
      } else if (s == 0) {
        int rep[] = new int[frames];
        rep = Arrays.copyOf(temp, frames);
        cnt = 0;
        for (int i = m - 1; i >= 0; i--) {
          for (int j = 0; j < frames; j++) {
            if ((instream[i] == rep[j])) {
              rep[j] = 999;
              cnt++;
              break;
            }
          }
          if (cnt == frames) {
            pt = instream[i];
            break;
          }
        }
        for (int j = 0; j < frames; j++) {
          if (temp[j] == pt) {
            temp[j] = instream[m];
            break;
          }
        }
      }
      System.out.println();
      System.out.print(instream[m] + "\t\t\t");
      for (n = 0; n < frames; n++) {
        if (temp[n] != -1) {
          System.out.print(temp[n] + "\t\t\t");
        } else {
          System.out.print(" - \t\t\t");
        }
      }
    }
    System.out.println("\nNumber of Page Faults is: " + pgfs);
    System.out.println("Number of hits is: " + hits);
  }
}
