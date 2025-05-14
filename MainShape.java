public class MainShape{
   public static void main(String[] args) {
        Shape s = new Shape(10, 20);
        Rectangle r = new Rectangle(40, 40, 15, 20);
        Circle c = new Circle(20, 30, 5);
        s.move(10, 20);
        r.move(30, 40);
        c.move(50, 60);
        r.scaleX(2);       
        r.scaleY(3);       
        c.scale(2);       
        System.out.println("長方形");       
        System.out.println("x座標:" + r.getX());       
        System.out.println("y座標:" + r.getY());       
        System.out.println("幅:" + r.getWidth());       
        System.out.println("高さ:" + r.getHeight());       
        System.out.println("円");       
        System.out.println("x座標:" + c.getX());       
        System.out.println("y座標:" + c.getY());       
        System.out.println("半径:" + c.getRadius());   
        }
}
