package com.example.demo.api;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.HelloDto;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;

import org.springframework.web.bind.annotation.RequestMethod;

@Log4j2
// @Controller
@RestController
public class hello {

    @PostMapping("/helloData")
    public String getHeloData(@RequestBody HelloDto helloDto) throws Exception {
        String hello = "안녕하세용";

        log.info(helloDto.getHelloData());
        log.info(helloDto.getAge());

        // 됏네
        // String gettingHello = helloDto.getHelloData();
        // log.info(gettingHello);머가됨

        // Map<String, String[]> paramMap = request.getParameterMap();

        // log.info(paramMap); // 여가지는 이게 맞음
        // org.apache.catalina.util.ParameterMap@38ddabad

        // log.info(paramMap.size());
        // String paramString = paramMap.size() > 0 ? paramMap.get("hi").toString() :
        // "";

        // log.info(paramString); // 근데 이렇게 하면 사실 문제가 잇음. 모든 key 값을 스트링으로 줘야하기에 병신됨

        if (helloDto.getHelloData().equals(hello)) {
            hello = "반갑습니다. ";
        } else {
            hello = "어쩌라고요;; ";
        }
        return hello;
    }

}
