import { Component, OnInit } from '@angular/core';
import Stomp  from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  private serverUrl = 'http://localhost:8080/socket'
  public title = 'WebSockets chat';
  private stompClient;

  public search;
 
  constructor(){
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(search){
    this.stompClient.send("/app/send/message" , {}, search);
    this.search = null;
  }
}
