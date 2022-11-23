import java.util.*;

public class Main {

  public static void main(String args[]) {
    int pages[] = {
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
    int noOfPages = pages.length;
    int frames = 4;
    int currentFrame[] = new int[frames];
    int s = 0;
    int total = 0;
    int pageFaults = 0;
    int hits = 0;
    int point = 0;

    for (int i = 0; i < frames; i++) {
      currentFrame[i] = -1;
    }
    System.out.println("Pages " + "frame1 " + "frame2 " + "frame3");

    for (int i = 0; i < noOfPages; i++) {
      s = 0;
      for (int j = 0; j < frames; j++) {
        if (currentFrame[j] == pages[i]) {
          s++;
          hits++;
          pageFaults--;
        }
      }
      pageFaults++;

      if (s == 0 && pageFaults <= frames) {
        currentFrame[i] = pages[i];
      } else if (s == 0) {
        int rep[] = new int[frames];
        int same[] = new int[frames];
        for (int o = 0; o < frames; o++) {
          same[o] = -1;
        }
        int inc = 0, flag = 0;
        rep = Arrays.copyOf(currentFrame, frames);
        int cnt = 0;
        for (int m = i - 1; m >= 0; m--) {
          for (int k = 0; k < frames; k++) {
            if (rep[k] == pages[m]) {
              same[inc] = rep[k];
              inc++;
              rep[k] = 9999;
              cnt++;
              break;
            }
          }
          if (cnt == frames) {
            point = pages[m];
            break;
          }
          if (cnt < frames) {
            for (int lo = 0; lo < frames; lo++) {
              for (int ko = 0; ko < same.length; ko++) {
                if (same[ko] != currentFrame[lo]) {
                  point = currentFrame[lo];
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

        for (int j = 0; j < frames; j++) {
          if (currentFrame[j] == point) {
            currentFrame[j] = pages[i];
            break;
          }
        }
      }

      //   Printing
      System.out.print((pages[i]) + "     ");
      for (int j = 0; j < frames; j++) {
        System.out.print(currentFrame[i] + "      ");
      }
      System.out.println();
    }

    System.out.println("Hits: " + hits);
    System.out.println("Faults: " + pageFaults);
  }
}
