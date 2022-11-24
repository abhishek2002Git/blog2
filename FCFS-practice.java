import java.util.*;

public class Main {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter number of processes: ");
    int n = sc.nextInt();
    int at[] = { 0, 1, 5, 6 };
    int bt[] = { 2, 2, 3, 4 };
    int ta[] = new int[n];
    int ct[] = new int[n];
    int wt[] = new int[n];
    int pid[] = { 1, 2, 3, 4 };
    int flags[] = {0,0,0,0};
    int temp;
    int total=0, st=0;

    // for (int i = 0; i < n; i++) {
    //   System.out.println("Enter arrival time of " + (i + 1));
    //   at[i] = sc.nextInt();
    //   System.out.println("Enter burst time of " + (i + 1));
    //   bt[i] = sc.nextInt();
    //   pid[i] = i + 1;
    // }

    // for (int i = 0; i < n; i++) {
    //   for (int j = 0; j < (n - (i + 1)); j++) {
    //     if (at[j] > at[j + 1]) {
    //       temp = at[j];
    //       at[j] = at[j + 1];
    //       at[j + 1] = temp;
    //       temp = bt[j];
    //       bt[j] = bt[j + 1];
    //       bt[j + 1] = temp;
    //       temp = pid[j];
    //       pid[j] = pid[j + 1];
    //       pid[j + 1] = temp;
    //     }
    //   }
    // }

    while(true) {
      int c = n, min = 9999;
        if(total == n ) break;
      for (int i = 0; i < n; i++){

        if(at[i] <= st && flags[i] == 0 && bt[i]<min){
          min = bt[i];
          c = i;
        }
      }
      if(c == n) st++; else{
          ct[c] = st + bt[c];
          st += bt[c];
          ta[c] = ct[c] - at[c];
          wt[c] = ta[c] - bt[c];
          flags[c] = 1;
          total++;
        }
    }

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
