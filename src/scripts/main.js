import { LitElement, html } from '@polymer/lit-element';

class AtcgHelixLoader extends LitElement {

  static get properties() {};

  _render() {
    return html`
      <style>
        .helix-loader {
          font-size: 16px;
          font-family: sans-serif;
          user-select: none;
        }
        .helix-loader .dots {
          display: inline-block;
          position: relative;
        }
        .helix-loader .dots:not(:last-child) {
          margin-right: 6.5px;
        }
        .helix-loader .dots:before, .helix-loader .dots:after {
          border-radius: 50%;
          content: "";
          display: inline-block;
          height: 5px;
          width: 5px;
          position: absolute;
        }
        .helix-loader .dots:after {
          left: 12px;
        }
        .helix-loader .dots:nth-child(1):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -2.7s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(1):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -2.7s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(2):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -5.4s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(2):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -5.4s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(3):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -8.1s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(3):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -8.1s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(4):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -10.8s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(4):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -10.8s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(5):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -13.5s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(5):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -13.5s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(6):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -16.2s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(6):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -16.2s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(7):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -18.9s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(7):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -18.9s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(8):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -21.6s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(8):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -21.6s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(9):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -24.3s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(9):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -24.3s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        .helix-loader .dots:nth-child(10):before {
          animation: animBefore 3s linear infinite;
          animation-delay: -27s;
          background-color: #ffc874;
          transform: translateY(-330%);
        }
        .helix-loader .dots:nth-child(10):after {
          animation: animAfter 3s linear infinite;
          animation-delay: -27s;
          background-color: #BAC1CB;
          transform: translateY(330%);
        }
        @keyframes animBefore {
          0% {
            transform: scale(1) translateY(330%);
            z-index: 1;
          }
          25% {
            background-color: #ffb441;
            transition: background-color 3s linear;
            transform: scale(1.6) translateY(0);
            z-index: 1;
          }
          50% {
            transform: scale(1) translateY(-330%);
            z-index: -1;
          }
          75% {
            background-color: #ffc874;
            transition: background-color 3s linear;
            transform: scale(0.5) translateY(0);
            z-index: -1;
          }
          100% {
            transform: scale(1) translateY(330%);
            z-index: -1;
          }
        }
        @keyframes animAfter {
          0% {
            transform: scale(1) translateY(-330%);
            z-index: -1;
          }
          25% {
            background-color: #BAC1CB;
            transition: background-color 3s linear;
            transform: scale(0.5) translateY(0);
            z-index: -1;
          }
          50% {
            transform: scale(1) translateY(330%);
            z-index: 1;
          }
          75% {
            background-color: #8995A5;
            transition: background-color 3s linear;
            transform: scale(1.6) translateY(0);
            z-index: 1;
          }
          100% {
            transform: scale(1) translateY(-330%);
            z-index: 1;
          }
        }
      </style>
      <div class="helix-loader">
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
      </div>
    `;
  }
}

customElements.define('atcg-helix-loader', AtcgHelixLoader);