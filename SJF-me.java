import java.util.*;

class fcfs {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter number of processes: ");
    int n = sc.nextInt();
    int pid[] = new int[n];
    int at[] = new int[n];
    int bt[] = new int[n];
    int ct[] = new int[n];
    int ta[] = new int[n];
    int wt[] = new int[n];
    int flags[] = new int[n];
    int total = 0, st = 0;

    // user input
    for (int i = 0; i < n; i++) {
      System.out.println("Enter arrival time of process " + (i + 1));
      at[i] = sc.nextInt();
      System.out.println("Enter burst time of process " + (i + 1));
      bt[i] = sc.nextInt();
      pid[i] = i + 1;
      flags[i] = 0;
    }

    // while (true) {
    //   int min = 9999, c = n;
    //   if (total == n) break;
    //   for (int i = 0; i < n; i++) {
    //     if (at[i] <= st && flags[i] == 0 && bt[i] < min) {
    //       min = bt[i];
    //       c = i;
    //     }
    //   }

    //   if (c == n) st++; else {
    //     ct[c] = bt[c] + st;
    //     st += bt[c];
    //     ta[c] = ct[c] - at[c];
    //     wt[c] = ta[c] - bt[c];
    //     flags[c] = 1;
    //     total++;
    //   }
    // }

    while (true) {
      int min = 9999, c = n;
      if (total == n) {
        break;
      }
      for (int i = 0; i < n; i++) {
        if (at[i] <= st && flags[i] == 0 && bt[i] < min) {
          min = bt[i];
          c = i;
        }
      }

      if (c == n) st++; else {
        ct[c] = st + bt[c];
        st += bt[c];
        ta[c] = ct[c] - at[c];
        wt[c] = ta[c] - bt[c];
        flags[c] = 1;
        total++;
      }
    }

    // Printing arrays
    System.out.println(
      "Pid  " + "At   " + "Bt   " + "Ct  " + "Ta  " + "Wt  " + '\n'
    );
    for (int i = 0; i < n; i++) {
      System.out.println(
        pid[i] +
        "    " +
        at[i] +
        "    " +
        bt[i] +
        "  " +
        ct[i] +
        "  " +
        ta[i] +
        "  " +
        wt[i] +
        '\n'
      );
    }
  }
}
