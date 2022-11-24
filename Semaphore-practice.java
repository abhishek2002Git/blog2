import java.util.concurrent.Semaphore;

public class Main {

  static Semaphore semaphore = new Semaphore(4);

  static class ATMThread extends Thread {

    String name = ""; //

    ATMThread(String name) {
      this.name = name;
    }

    public void run() { //
      try { //
        semaphore.acquire();
        System.out.println(name + " entered into ATm");
        System.out.println(name + " withdrawed ATm");
        Thread.sleep(1000);
        System.out.println(name + " left ATm");
        semaphore.release();
      } catch (InterruptedException e) {
        e.printStackTrace(); //
      }
    }
  }

  public static void main(String args[]) {
    ATMThread t1 = new ATMThread("A");
    t1.start();
    ATMThread t2 = new ATMThread("B");
    t2.start();
    ATMThread t3 = new ATMThread("C");
    t3.start();
    ATMThread t4 = new ATMThread("D");
    t4.start();
    ATMThread t5 = new ATMThread("E");
    t5.start();
    ATMThread t6 = new ATMThread("F");
    t6.start();
  }
}
