package com.imooc.aop.demo2;

import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import javax.sound.midi.Soundbank;
import java.lang.reflect.Method;

public class MyCglibProxy implements MethodInterceptor {

    ProductDao productDao;

    public MyCglibProxy(ProductDao productDao){
        this.productDao = productDao;
    }

    public Object createProxy(){
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(productDao.getClass());
        enhancer.setCallback(this);
        Object object = enhancer.create();
        return object;
    }


    public Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
       if("save".equals(method.getName())){
           System.out.println("权限校验...");
           return methodProxy.invokeSuper(proxy,args);
       }

        return methodProxy.invokeSuper(proxy, args);
    }
}
