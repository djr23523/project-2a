/**
 * Copyright 2024 djr23523
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import "wired-elements";

/**
 * `project-2a`
 * 
 * @demo index.html
 * @element project-2a
 */
export class Project2a extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2a";
  }

  constructor() {
    super();
    this.title = "";
    this.character={
      seed: "0000000000",
      accessories: 0,
      base: 0,
      face: 0,
      leg: 0,
      faceitem:0,
      hair: 0,
      pants: 0,
      ratio: 200,
      name: "",
      shirt: 0,
      hat: 0,
      skin: 0,
      fire: false,
      walking: false,

    };
    this._applySeedToSettings();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      character: { type: Object },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-secondary);
        --rpg-character-ratio:2.5;
      }
      .wrapper {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:var(--ddd-spacing-5);
      }
      rpg-character {
          transform: scale(var(--rpg-character-scale, 2.5));
          margin: var(--ddd-spacing-28);
      }
      wired-combo {
          flex: 1;
          width: 100%;
          height: var(--ddd-spacing-10);
          margin-bottom: var(--ddd-spacing-6);
       
        }
        wired-item{
          opacity: 1;
        }
  
        wired-checkbox {
          display: block;
          margin-top: var(--ddd-spacing-5);
          opacity: 1;
        }
        wired-button {
          margin-top: var(--ddd-spacing-5);
        }
        wired-slider {
          display: block;
          margin-bottom: var(--ddd-spacing-5);
          max-width: 300px;
        }
        wired-input {
          width: 100%;
          margin-bottom: var(--ddd-spacing-5);
          opacity: 1;
        }
        .seed-display {
          margin-top: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
        }
      .char-panel{
        text-align: center;
          background-color: var(--ddd-theme-default-wonderPurple);
          border: 5px solid var(--ddd-theme-default-link80);
          padding: var(--ddd-spacing-4);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      }
      .inputs-panel {
          background-color: var(--ddd-theme-default-beaverBlue);
          border: 4px solid var(--ddd-theme-default-nittanyNavy);
          padding: var(--ddd-spacing-6);
          border-radius: 10px;
        }
        .notification {
          position: fixed;
          bottom: var(--ddd-spacing-5);
          right: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-green);
          color: var(--ddd-theme-default-white);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-spacing-1);
          font-size: 14px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          z-index: 1000;
        }
      .leg-disabled {
          opacity: 0.4;
          pointer-events: none;
      }
      .notification.show {
          opacity: 1;
        }

      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="char-panel">
    <div class ="">
      <div class= "">
        <rpg-character
          literalseed
          base="${this.character.base}"
          face="${this.character.face}"
          faceitem="${this.character.faceitem}"
          hair="${this.character.hair}"
          shirt="${this.character.shirt}"
          skin="${this.character.skin}"
          pants="${this.character.pants}"
          hatcolor="${this.character.hatcolor}"
          hat="${this.character.hat}"
          ?fire="${this.character.fire}"
          ?walking="${this.character.walking}"
          ?circle="${this.character.circle}"
          style="--rpg-character-ratio: ${this.character.ratio}"
        ></rpg-character>
        <div class="seed-display">Seed: ${this.character.seed}
            <div><a href="https://github.com/haxtheweb/issues/issues/1414" target="blank">Issue</a></div>
        </div>
      </div>
      <div class="inputs-panel">
        <label for="characterNameInput">Character Name:</label>
        <wired-input
          type="text"
          placeholder="Enter Name"
          @input="${(e) => this._updateSetting('name', e.target.value)}"
          ></wired-input>
        <label for="hair">Hair:</label>
        <wired-input
          type="number"
          value="${this.character.hair}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('hair', parseInt(e.detail.value))}"
        ></wired-input>
        <label for="base">Base:</label>
        <wired-input
          type="number"
          value="${this.character.base}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('base', parseInt(e.detail.value))}"
        ></wired-input>
        <label for="accessories">Accessories:</label>
        <wired-input
          type="number"
          value="${this.character.accessories}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('accessories', parseInt(e.detail.value))}"
        ></wired-input>
        <label for="face">Face:</label>
        <wired-input
          type="number"
          value="${this.character.face}"
          min="0"
          max="5"
          @input="${(e) => this._updateSetting('face', parseInt(e.detail.value))}"
        ></wired-input>
        <label for="leg">Leg:</label>
        <wired-input
          type="number"
          value="${this.character.leg}"
          min="0"
          max="1"
          @input="${(e) => this._updateSetting('leg', parseInt(e.detail.value))}"
          class="${this.leg === 0 ? 'leg-disabled' : ''}" ?disabled="${this.leg === 0}"
        ></wired-input>
        <label for="faceitem">Faceitem:</label>
        <wired-input
          type="number"
          value="${this.character.faceitem}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('faceitem', parseInt(e.detail.value))}" 
        ></wired-input>
        <label for="pants">Pants:</label>
        <wired-input
          type="number"
          value="${this.character.pants}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('pants', parseInt(e.detail.value))}" 
        ></wired-input>
        <label for="shirt">Shirt:</label>
        <wired-input
          type="number"
          value="${this.character.shirt}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('shirt', parseInt(e.detail.value))}" 
        ></wired-input>
        <label for="skin">Skin:</label>
        <wired-input
          type="number"
          value="${this.character.skin}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('skin', parseInt(e.detail.value))}" 
        ></wired-input>
        <label for="hatcolor">Hatcolor:</label>
        <wired-input
          type="number"
          value="${this.character.hatcolor}"
          min="0"
          max="9"
          @input="${(e) => this._updateSetting('hatcolor', parseInt(e.detail.value))}" 
        ></wired-input>
        <label for="hat">Hat:</label>
        <wired-combo 
          .selected="${this.character.hat}"
          @selected="${(e) => this._updateSetting('hat', e.detail.selected)}">
          <wired-item value="bunny">Bunny</wired-item>
          <wired-item value="coffee">Coffee</wired-item>
          <wired-item value="construction">Construction</wired-item>
          <wired-item value="cowboy">Cowboy</wired-item>
          <wired-item value="education">Education</wired-item>
          <wired-item value="knight">Knight</wired-item>
          <wired-item value="ninja">Ninja</wired-item>
          <wired-item value="party">Party</wired-item>
          <wired-item value="pirate">Pirate</wired-item>
          <wired-item value="watermelon">Watermelon</wired-item>
        </wired-combo>
        <label for="ratio">Character Size:</label>
          <wired-slider 
            id="ratio" 
            value="2.5" 
            min="1" 
            max="3" 
            step=".5"
            @change="${(e) => this._updateSetting('ratio', parseFloat(e.detail.value))}">
          </wired-slider>
        <wired-checkbox
            ?checked="${this.character.fire}"
            @change="${(e) => this._updateSetting('fire', e.target.checked)}"
        >On Fire</wired-checkbox>

        <wired-checkbox
            ?checked="${this.character.walking}"
            @change="${(e) => this._updateSetting('walking', e.target.checked)}"
        >Walking</wired-checkbox>
          
        <wired-checkbox
            ?checked="${this.character.circle}"
            @change="${(e) => this._updateSetting('circle', e.target.checked)}"
        >Circle</wired-checkbox>
        <wired-button class="share" @click="${this._generateLink}">Share</wired-button>
      </div>
    </div>
  </div>
  <div id="notification" class="notification"></div>
</div>`;
  }
_applySeedToSettings(){
    const seed = this.character.seed;
    const paddedSeed = seed.padStart(8, "0").slice(0, 8);
    const values = paddedSeed.split("").map((v) => parseInt(v, 10));
  
    [
      this.character.accessories,
      this.character.base,
      this.character.leg,
      this.character.face,
      this.character.faceitem,
      this.character.hair,
      this.character.pants,
      this.character.shirt,
      this.character.skin,
      this.character.hatColor,
    ] = values;
  
    this.requestUpdate();
}
_updateSetting(key, value) {
  this.character = { ...this.character, [key]: value };
  this._generateSeed();
  this.requestUpdate();
}
_generateSeed() {
  const { accessories,base, leg, face, faceitem, hair, pants, shirt, skin, hatcolor } = this.character;
  this.character.seed = `${accessories}${base}${leg}${face}${faceitem}${hair}${pants}${shirt}${skin}${hatcolor}`;
  this.requestUpdate();
}
_generateLink() {
  const base = window.location.href.split("?")[0];
  const para = new URLSearchParams({ seed: this.character.seed }).toString();
  const shareLink = `${base}?${para}&fire=${this.character.fire}&walking=${this.character.walking}&circle=${this.character.circle}`;

  navigator.clipboard.writeText(shareLink).then(
    () => this._showNotification("Link copied!"),
    (err) => this._showNotification(`Error: ${err}`)
  );
}

_showNotification(message) {
  const notification = this.shadowRoot.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
connectedCallback() {
  super.connectedCallback();
  const params = new URLSearchParams(window.location.search);

  if (params.has("seed")) {
    this.character.seed = params.get("seed");
    this._applySeedToSettings(); 
  }
  console.log("Seed on page load:", this.character.seed);
  this.requestUpdate();
}
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Project2a.tag, Project2a);