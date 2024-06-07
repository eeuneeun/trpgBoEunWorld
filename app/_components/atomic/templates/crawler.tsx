"use server";

import { rejects } from "assert";




// # 네이버 부동산 크롤러
export async function CrawlerOfNaverEstate() {
    const Crawler = require('crawler');
    console.log(Crawler, "시작!")

    const c = new Crawler({
        maxConnections: 10,
        // This will be called for each crawled page
        callback: (error:any, res:any, done:any) => {
            if (error) {
                console.log(error);
            } else {
                const $ = res.$;
                let result = null;
            
                if(done){
                  result = done($);
                  console.log(result)
                }

                console.log($('title').text());
            }
            done();
        }
    });
   
    // 네이버 부동산 map 크롤링까지 완료
    c.queue([{
        uri: 'https://new.land.naver.com/complexes/104829?ms=37.4776901,126.9342445,15&a=APT:PRE:ABYG:JGC&e=RETAIL&articleNo=2425374095',
        method: 'GET',
        headers: {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'},
        // http2: true, //set http2 to be true will make a http2 request
        jQuery:true,
        callback: (error:any, res:any, done:any) => {
            if (error) {
                console.log(error);
                rejects(error);
            } else {
                const $ = res.$;
                console.log("#################끝")
                // console.log('title', $('#articleListArea .item_title .text').html());
                console.log('title', $('#ct').text());
            }
            return done();
        }
    }]);
    
    // Queue some HTML code directly without grabbing (mostly for tests)
    c.queue([{
        html: '<p>This is a <strong>test</strong></p>'
    }]);

    // c 객체 내용에 대해서 좀 더 분석해 볼 것
    console.log("c", c);
}



// # 알고리즘 풀이 사이트, 백준 크롤러
export async function CrawlerOfBackjoon() {
    const Crawler = require('crawler');
    console.log(Crawler, "시작!")

    const c = new Crawler({
        maxConnections: 10,
        callback: (error:any, res:any, done:any) => {
            if (error) {
                console.log(error)
                rejects(error);
            } else {
                const $ = res.$;
                let result = null;
            
                if(done){
                  result = done($);
                  console.log(result)
                }

                console.log($('title').text());
            }
            done();
        }
    });
    
    // 백준 사이트
    c.queue({
        uri: 'https://www.acmicpc.net/problem/1000',
        method: 'GET',
        headers: {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'},
        http2: true, //set http2 to be true will make a http2 request
        jQuery:true,
        callback: (error: any, res: any, done: any) => {
            if (error) {
                console.error(error);
            }else{
                const $ = res.$;
                console.log("JQuery 사용 가능, 백엔드 단위 크롤링 테스트 완료");
                // 1. 백준 사이트 : 알고리즘 문제 설명 문단 첫 번째
                console.log($('#problem_description p').text());
            }
            return done();
        }
    })
    // c 객체 내용에 대해서 좀 더 분석해 볼 것
    console.log("c", c);
}



    
