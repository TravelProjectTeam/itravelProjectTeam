package org.itrip.utils;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.font.FontRenderContext;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;

public class RandomValidateCode {
	
	private Random random = new Random();
	private int width = 95;// 图片宽
	private int height = 25;// 图片高
	private int lineSize = 40;// 干扰线数量
	
	/* 绘制验证码 */
    public String drawImg(ByteArrayOutputStream output) {
        String code = "";
     
        // 随机产生4个字符
        for (int i = 0; i < 4; i++) {
            code += randomChar();
        }
        int width = 70;
        int height = 25;
        BufferedImage bi = new BufferedImage(width, height,
                BufferedImage.TYPE_3BYTE_BGR);
        Font font = new Font("Times New Roman", Font.PLAIN, 20);
        // 调用Graphics2D绘画验证码
        Graphics2D g = bi.createGraphics();
        g.setFont(font);
        Color color = new Color(66, 2, 82);
        g.setColor(color);
        g.setBackground(new Color(226, 226, 240));
        g.clearRect(0, 0, width, height);
        // 绘制干扰线
        for (int i = 0; i <= lineSize; i++) {
            drowLine(g);
        }
        
        FontRenderContext context = g.getFontRenderContext();
        Rectangle2D bounds = font.getStringBounds(code, context);
        double x = (width - bounds.getWidth()) / 2;
        double y = (height - bounds.getHeight()) / 2;
        double ascent = bounds.getY();
        double baseY = y - ascent;
        g.drawString(code, (int) x, (int) baseY);
        g.dispose();
        try {
            ImageIO.write(bi, "jpg", output);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return code;
    }
    
    /* 获取随机参数 */
    public char randomChar() {
        String s = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789";
        return s.charAt(random.nextInt(s.length()));
    }
    
    /*
     * 绘制干扰线
     */
    public void drowLine(Graphics g) {
        int x = random.nextInt(width);
        int y = random.nextInt(height);
        int xl = random.nextInt(13);
        int yl = random.nextInt(15);
        g.drawLine(x, y, x + xl, y + yl);
    }

}
