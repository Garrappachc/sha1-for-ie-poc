import { Component, OnInit } from '@angular/core';
import { TextEncoder } from 'text-encoding';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  input = 'dupa13';

  output = '';

  ngOnInit() {
    const encoded = new TextEncoder().encode(this.input);
    window.crypto.subtle.digest('SHA-1', encoded)
      .then(hash => {
        console.log('HASHED');
        this.output = String.fromCharCode.apply(null, new Uint8Array(hash));
      });
  }

}
