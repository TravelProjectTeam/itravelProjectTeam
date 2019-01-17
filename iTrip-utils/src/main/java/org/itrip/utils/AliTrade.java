package org.itrip.utils;

import com.alibaba.fastjson.JSON;
import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;

/**
 * 支付宝支付工具类
 * @author naruto
 *
 */
public class AliTrade {
	//appid 对应《沙箱应用》页面的appid
	public static final String APP_ID = "2016092400588225";
	//对应工具生产的商户应用私钥
	public static final String APP_PRIVATE_KEY ="MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+8NVAiROXrjFhQ+qyXvl7so1gYqzwkJCkP6IBxz2D6v02FiwqNTikP4vGdCwzigWSXzI4OT5MyFluv6nyY6z+T1SRSdTE8wOQVF28RGU5f7bVpJf8y7YrqSS5dlI2mqbPjLMd27OQZw3amvRRWX7kO81IzCzvUGEd/mNVMQarE6SVqpX/oOCvG9GrLlo6undbYPxfB6QFwruzh5h/TJsandSwnm5sBrtvvEgnnC1uAh2j1wBuAPA/4G0jsrMjA+tM3j71wd3hQVsPko7Heqp4znKV7/wucv5a0qfbua7k4FNZdfctJ8kOKlYCQ41ms3/Wnwqt1ak/GN0MxuUmMillAgMBAAECggEAa4fd0RZhfk6PaKODDSkHf24yyFFJ68C+dIGRj0bRkfVI3Kjn/m0ylO1knkLWkb/tG12ZPqieOUerdf9iiiswRZgPnDLkLHZfT2zzzQ8HorYWFYM4RRnEYhpDoF7ONgoqX0BxryMHoQ8ocjBJ33ZzS72SAqlZtPyjdOzKrDOL+dOA6dkiEIf4Es0ZrFnoyiVSovgMjv87A6al8y+J/BQfqpmlPvT2d5jlHHhZDQNHYqYVH7d/fWMXPv8+DmvoBgDNrBrW/sC/3XcAa+wyM15DvV3op9jcKxTC2yk5ayb+lLoabKZ4ECxxDx1+phRfM34EOhfRV0wQtuMWlpqiRNU6AQKBgQDl8js0QHkT0NSbZfj7VRLPYPYHWL58yh+EuITlYxIuWLe5KnD332ljqlDv9ShnvqrD35ae+m4Wro2WBuRZu8dBLhZKSA99NCYKhkPT9pH1YoTf5VM7OMWp6bzu+Gtr1jGW6lj9s2F5GrrS+aE5Fyi+bslCgD2QG8XsN4u9oi4nBQKBgQDUkzfPU5phq+K+yrDhy8hALvKTiVNEH3cW81CgVGyd39OFCGxn5W4Ba5mHYZ2p9GMy/q1sNdLobKC9b+pauMXWHfH3qfP5wYHDNmb2v18ETPXvwtR+H4mNtQ8IH8IqyF9ynTf3EkF9dIqiRvSVWFs7F8qa0lwkU4urGU7Y1eTG4QKBgDbeRA5FzB5UWEb0YCLou+JMCqjaHin8uOSceumZaD8y4DQI0ofzAVzMyR9Y6llG/8xZT8GDlD1JTXOdFWPsELGW46653yhLB0C/pPOxBEb/SSF7wQ6Cj3fp1DFZiZhjtdWC+dUftoSFQksRUc0jn49BNDjwDMCUP/gLkQag6k5ZAoGAa/qkHNJw1zBCq3u2QdwLyl6OpdbZzv7UtXm++NIpokAx55+RwWzPZjVL9XLmbZBQW3T2jsMAcUPMmq2gs5isFcl8Qbu4zKM40PpvbuNi1oJpYvLqkW5fpvXTvuKy9Jx3r3ahGQXS8nEigq/cSYhqPygkqGQ2ndU6Wx0t6gMshMECgYEAz78JuNfTJjbAhUYSkSd30WyE8tj4vuWSJGu0UCLATjqZmwrZO2Nh5nF3GKBeO1pYrMmAyt4p34Wh6BdY6SgLi7yU0/K5Q1UR0VhWADOg4S5rLqNreCfmGduMz2eg+wivPwxJZDvqWc/Iqh2aRGd4JlpwoRUHkPjYnSoqpxAIAZE=";
	//传输格式，只能为json
	public static final String FORMAT = "json";
	//字符编码可以根据需求修改
	public static final String CHARSET = "utf-8";
	//此处为支付宝公钥非应用公钥，注意不要搞混了，在《沙箱应用》页面点击查看支付宝公钥可以得到
	public static final String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApLk88XAfNsncBeyZlYjCkdiAPxww6KxW0UNbwfuh23KyuGaidXGk2j5kdH9lk837Hz661GVyjf87meF3BHVLkIWMs8EWonWskOEWv4t4++c1PJVvnXyiBq+W3DWWrteLMmcESxZbgdpks0NfiZl1XGFVZhJpqCH2ttRf/4VZRm8fsNC5Rk1XGC7mwf+FBrBzmYnQ//KUloViwXFE/CtQk5O6mN+DSYFJC1XLby8XLRwd1WJZRroDdiSQwJ18sachdaN6gtCiSR+P01Wiw51ccJbGNlAAQAI7zBVSZlKHxIIRn39KiJnpknpw1jmZeXPvSI003IDXReZtZEPc6lT/CQIDAQAB";
	//签名算法类型，支付宝推荐使用RSA2
	public static final String SIGN_TYPE = "RSA2";
	//沙箱支付宝网关，在《沙箱应用》页面可以看到
	public static final String GATEWAY = "https://openapi.alipaydev.com/gateway.do";
	
	/**
	 * 调用支付宝支付页面
	 * @param pay 支付宝支付页面请求参数对象
	 * @return 返回支付页面表单标签字符串
	 */
	public static String pay(Pay pay) {
		//获得初始化的AlipayClient
		AlipayClient alipayClient = new DefaultAlipayClient(GATEWAY, APP_ID, 
				APP_PRIVATE_KEY, FORMAT, CHARSET, ALIPAY_PUBLIC_KEY, SIGN_TYPE); 
		//创建API对应的request
	    AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
	    //同步回调地址
	    alipayRequest.setReturnUrl("http://localhost:8080/iTrip-web/returnUrl");
	    //异步回调地址
	    alipayRequest.setNotifyUrl("http://localhost:8080/iTrip-web/notifyUrl");
	    //业务参数为json格式
	    alipayRequest.setBizContent(JSON.toJSONString(pay));
	    //页面表单标签字符串
	    String form="";
	    try {
	    	 //调用SDK生成表单
	        form = alipayClient.pageExecute(alipayRequest).getBody();
	    } catch (AlipayApiException e) {
	        e.printStackTrace();
	    }
	    return form;
	}
}
