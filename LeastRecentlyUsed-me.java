import java.util.*;

public class Main {

  public static void main(String args[]) {
    int frames = 4;
    int currentFrame[] = new int[frames];
    int pages[] = { 7,
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
    int noOfPages = pages.length;
    int s;
    int hits = 0;
    int pageFaults = 0;
    int point = 0;

    System.out.println("Incoming \t Frame1 \t Frame2 \t Frame3 \t Frame4");

    for (int i = 0; i < frames; i++) {
      currentFrame[i] = -1;
    }

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

      if (pageFaults <= frames && s == 0) {
        currentFrame[i] = pages[i];
      } else if (s == 0) {
        int rep[] = new int[frames];
        rep = Arrays.copyOf(currentFrame, frames);
        int cnt = 0;
        for (int m = i - 1; m >= 0; m--) {
          for (int n = 0; n < frames; n++) {
            if (rep[n] == pages[m]) {
              cnt++;
              rep[n] = 9999;
              break;
            }
          }
          if (cnt == frames) {
            point = pages[m];
            break;
          }
        }
        for (int k = 0; k < frames; k++) {
          if (currentFrame[k] == point) {
            currentFrame[k] = pages[i];
            break;
          }
        }
      }
      System.out.println();
      System.out.print(pages[i] + "\t\t\t");
      for (int l = 0; l < frames; l++) {
        if (currentFrame[l] != -1) {
          System.out.print(currentFrame[l] + "\t\t\t");
        } else {
          System.out.print(" - \t\t\t");
        }
      }
    }

    System.out.println("\nNumber of Page Faults is: " + pageFaults);
    System.out.println("Number of hits is: " + hits);
  }
}
