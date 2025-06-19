public class Forecast {
    public static double futureValue(double currentValue, double rate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return futureValue(currentValue * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;
        double growthRate = 0.10;    
        int years = 5;

        double futureValue = futureValue(presentValue, growthRate, years);
        System.out.println("Future value after " + years + " years:");
        System.out.println(futureValue);
    }
}



/*  Time Complexity:
    Each recursive call reduces years by 1 → total calls = n
    So time complexity is O(n)           */
