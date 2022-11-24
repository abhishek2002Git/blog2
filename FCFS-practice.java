import java.util.*;

public class Main {

  public static void main(String[] args) {
    int incomingStream[] = { 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 1, 2, 0 };
    int pf = 0;
    int frames = 3;
    int m, n, s, pgs, cnt = 0;
    int pt = 0;
    pgs = incomingStream.length;
    System.out.println("Incoming \t Frame1 \t Frame2 \t Frame3");
    int tmp[] = new int[frames];
    for (m = 0; m < frames; m++) {
      tmp[m] = -1;
    }
    for (m = 0; m < pgs; m++) {
      s = 0;
      for (n = 0; n < frames; n++) {
        if (incomingStream[m] == tmp[n]) {
          s++;
          cnt++;
          pf--;
        }
      }
      pf++;
      if ((pf <= frames) && (s == 0)) { //if pf <=3 it will add else it will replace following fifo
        tmp[m] = incomingStream[m];
      } else if (s == 0) {
        int rep[] = new int[frames];
        rep = Arrays.copyOf(temp, frames);
        int cnt = 0;
        for (int i = m - 1; i >= 0; i--) {
          for (int j = 0; j < frames; j++) {
            if (rep[j] == incomingStream[i]) {
              rep[j] = 9999;
              cnt++;
              break;
            }
          }
          if (cnt == frames) {
            pt = incomingStream[j];
            break;
          }
        }
        for (int j = 0; j < frames; j++) {
          if (tmp[j] == pt) {
            tmp[j] = instream[m];
            break;
          }
        }
      }
      System.out.println();
      System.out.print(incomingStream[m] + "\t\t\t");
      for (n = 0; n < frames; n++) {
        if (tmp[n] != -1) {
          System.out.print(tmp[n] + "\t\t\t");
        } else {
          System.out.print(" - \t\t\t");
        }
      }
    }
    System.out.println("\nNumber of Page Faults is: " + pf);
    System.out.println("Number of hits is: " + cnt);
  }
}
