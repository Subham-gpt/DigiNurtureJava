public class Main {
    public static void main(String[] args) {
        // Make a list of products
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Watch", "Accessories"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Bag", "Bags")
        };

        String searchName = "Watch";

        // Try Linear Search
        System.out.println("Linear Search:");
        Product result1 = SearchEngine.linearSearch(products, searchName);
        System.out.println(result1);

        System.out.println("\nBinary Search:");
        Product result2 = SearchEngine.binarySearch(products, searchName);
        System.out.println(result2);
    }
}
