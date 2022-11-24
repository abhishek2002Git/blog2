import java.util.*;

public class Main {

  public static void main(String args[]) {
    int pages[] = { 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 1, 2, 0 };
    int noOfPages = pages.length;
    int frames = 4;
    int currentFrame[] = new int[frames];
    int s;
    int pageFaults = 0, hits = 0;

    for (int i = 0; i < frames; i++) {
      currentFrame[i] = -1;
    }

    for (int m = 0; m < noOfPages; m++) {
      s = 0;
      for (int n = 0; n < frames; n++) {
        if (currentFrame[n] == pages[m]) {
          st++;
          pageFaults++;
          hits++;
        }
      }
      pageFaults--;
      if (pageFaults <= frames && s == 0) {
        currentFrame[m] = pages[m];
      } else if (s == 0) {
        currentFrame[(pageFaults - 1) % frames] = pages[m];
      }

      // print
      System.out.println();
      System.out.print(incomingStream[m] + "\t\t\t");
      for (int i = 0; i < frames; n++) {
        if (currentFrame[i] != -1) {
          System.out.print(currentFrame[i] + "\t\t\t");
        } else {
          System.out.print(" - \t\t\t");
        }
      }
    }
  }
}
