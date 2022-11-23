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
    System.out.println("Incoming \t Frame1 \t  Frame2 \t  Frame3 \t  Frame4");
    for (m = 0; m < frames; m++) {
      temp[m] = -1;
    }
    for (m = 0; m < l; m++) {
      s = 0;
      for (n = 0; n < frames; n++) {
        if (instream[m] == temp[n]) {
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
        int same[] = new int[frames];
        int inc = 0, flag = 0;
        for (int i = 0; i < frames; i++) {
          same[i] = -1;
        }
        rep = Arrays.copyOf(temp, frames);
        cnt = 0;
        for (int i = m + 1; i < l; i++) {
          for (int j = 0; j < frames; j++) {
            if (instream[i] == rep[j]) {
              same[inc] = rep[j];
              inc++;
              rep[j] = 999;
              cnt++;
              break;
            }
          }
          if (cnt == frames) {
            pt = instream[i];
            break;
          }
          if (cnt < frames) {
            for (int o = 0; o < frames; o++) {
              for (int p = 0; p < same.length; p++) {
                if (temp[o] != same[p]) {
                  pt = temp[o];
                  flag = 1;
                  break;
                }
                if (flag == 1) {
                  break;
                }
              }
            }
          }
        }
        for (int i = 0; i < frames; i++) {
          if (temp[i] == pt) {
            temp[i] = instream[m];
            break;
          }
        }
      }
      System.out.println();
      System.out.print(instream[m] + "\t\t");
      for (int i = 0; i < frames; i++) {
        if (temp[i] != -1) {
          System.out.print(temp[i] + "\t\t");
        } else {
          System.out.print("-\t\t");
        }
      }
    }
    System.out.println("\nNumber of page faults are: " + pgfs);
    System.out.println("Number of hits are: " + hits);
  }
}
