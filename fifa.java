public class Main {

  public static void main(String args[]) {
    int s = 0;
    int pf = 0;
    int numberOfPageHits = 0;
    int pages[] = { 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 1, 2, 0 };
    int numberOfPages = pages.length;
    int frames = 3;
    int tempFrame[] = new int[frames];
    for (int i = 0; i < frames; i++) {
      tempFrame[i] = -1;
    }

    System.out.println("Pages  " + "f1  " + "f2  " + "f3" + "\n");

    for (int i = 0; i < numberOfPages; i++) {
      s = 0;
      for (int j = 0; j < frames; j++) {
        if (pages[i] == tempFrame[j]) {
          s++;
          pf--;
          numberOfPageHits++;
        }
      }
      pf++;

      if (s == 0 && (pf <= frames)) {
        tempFrame[i] = pages[i];
      } else {
        tempFrame[(pf - 1) % frames] = pages[i];
      }

      //   Printing
      System.out.println(pages[i]);
      for (int k = 0; k < frames; k++) {
        if (tempFrame[k] == -1) {
          System.out.println("-  ");
        } else {
          System.out.println(tempFrame[k]);
        }
      }
      System.out.println("\n");
    }
  }
}
