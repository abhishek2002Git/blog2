import java.util.*;

public class Main {

  public static void main(String args[]) {
    int pages[] = {7,
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
      1,};
    int numberOfPages = pages.length;
    int frames = 4;
    int currentFrame[] = new int[frames];
    int s;
    int pageFaults = 0;
    int hits = 0;
    int cnt = 0;
    int point;

    for (int i = 0; i < frames; i++) {
      currentFrame[i] = -1;
    }

    for (int i = 0; i < numberOfPages; i++) {
      s = 0;
      for (int j = 0; j < frames; j++) {
        if (currentFrame[j] == pages[i]) {
          s++;
          pageFaults--;
          hits++;
        }
      }
      pageFaults++;

      if (pageFaults <= frames && s == 0) {
        currentFrame[i] = page[i];
      } else if (s == 0) {
        int rep[] = new int[frames];
        int same[] = new int[frames];
        for (int k = 0; k < frames; k++) {
          same[k] = -1;
        }
        cnt = 0;
        int inc = 0;
        int flag = 0;
        rep = Arrays.copyOf(currentFrame, frames);
        for (int m = i + 1; m < numberOfPages; m++) {
          for (int n = 0; n < frames; n++) {
            if (rep[n] == pages[m]) {
              same[inc] = rep[n];
              inc++;
              rep[n] = 9999;
              cnt++;
              break;
            }
          }

          if (cnt == frames) {
            point = pages[i];
            break;
          }
          if (cnt < frames) {
            for (int l = 0; l < frames; l++) {
              for (int s = 0; s < same.length; s++) {
                if (same[s] != currentFrame[l]) {
                  point = currentFrame[l];
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

        for (int o = 0; o < frames; o++) {
          if (currentFrame[o] == point) {
            currentFrame[0] = pages[i];
            break;
          }
        }
      }
      System.out.println();
      System.out.print(pages[i] + "\t\t");
      for (int q = 0; q < frames; q++) {
        if (currentFrame[q] != -1) {
          System.out.print(currentFrame[q] + "\t\t");
        } else {
          System.out.print("-\t\t");
        }
      }
    }
  }
}
