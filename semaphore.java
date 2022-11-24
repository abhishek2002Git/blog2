// https://ablaze-root-b13.notion.site/b3ed718dee8b41be826b4d4f72378d85?v=5beb317d2f644d9d8beb5d2c0483852b
// https://github.com/AjayRaut1/SPOS-LP-codes-Sem-5-CS-SPPU-2019-Pattern-/tree/main/LP%20codes%202nd%20Edition(Best%20Version)

import java.util.concurrent.Semaphore;

public class semaphores {

  static Semaphore semaphore = new Semaphore(4);

  static class ATMthread extends Thread {

    String name = "";

    //	        Parameterized Constructor
    ATMthread(String name) {
      this.name = name;
    }

    public void run() {
      try {
        semaphore.acquire();
        System.out.println(name + ":Entered into atm");
        System.out.println(name + ":Has done the withdrawal");
        Thread.sleep(1000);
        System.out.println(name + ":Has left the ATM");
        semaphore.release();
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }

  public static void main(String[] args) {
    // TODO Auto-generated method stub

    ATMthread t1 = new ATMthread("A");
    t1.start();
    ATMthread t2 = new ATMthread("B");
    t2.start();
    ATMthread t3 = new ATMthread("C");
    t3.start();
    ATMthread t4 = new ATMthread("D");
    t4.start();
    ATMthread t5 = new ATMthread("E");
    t5.start();
    ATMthread t6 = new ATMthread("F");
    t6.start();
  }
}
