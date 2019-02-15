import { Component, OnInit } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public title = 'WebSockets chat';
  private stompClient;

  public search;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {

    /* this is the endpoint that we added in the registerStompEndpoints() 
     * method in the server code.
     */
    const socket = new SockJS('http://127.0.0.1:8080/socket');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe("/chat", (message) => {
        if (message.body) {
          $(".chat").append("<div class='message'>" + message.body + "</div>")
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(search) {
    /* (void) send(destination, headers = {}, body = '')
     *     Send a message to a named destination.
     */
    this.stompClient.send("/app/send/message", {}, search);
    this.search = null;
  }
}
