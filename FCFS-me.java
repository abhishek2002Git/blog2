import java.util.*;
// Self Coded

class FCFS {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter number of processes: ");
    int n = sc.nextInt();
    int temp;

    // Input of Arrival time and burst time
    int pid[] = new int[n];
    int at[] = new int[n];
    int bt[] = new int[n];
    int ta[] = new int[n];
    int ct[] = new int[n];
    int wt[] = new int[n];
    for (int i = 0; i < n; i++) {
      System.out.println("Enter Arrival time of process " + (i + 1));
      at[i] = sc.nextInt();
      System.out.println("Enter Burst time of process " + (i + 1));
      bt[i] = sc.nextInt();
      pid[i] = i + 1;
    }

    // Sort arrays according to arrival time in ascending order
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n - (i + 1); j++) {
        if (at[j] > at[j + 1]) {
          temp = at[j];
          at[j] = at[j + 1];
          at[j + 1] = temp;

          temp = bt[j];
          bt[j] = bt[j + 1];
          bt[j + 1] = temp;

          temp = pid[j];
          pid[j] = pid[j + 1];
          pid[j + 1] = temp;
        }
      }
    }

    // Computing required values
    for (int i = 0; i < n; i++) {
      if (i == 0) {
        ct[i] = at[i] + bt[i];
      } else {
        if (at[i] > ct[i - 1]) {
          ct[i] = at[i] + bt[i];
        } else {
          ct[i] = ct[i - 1] + bt[i];
        }
      }

      ta[i] = ct[i] - at[i];
      wt[i] = ta[i] - bt[i];
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
