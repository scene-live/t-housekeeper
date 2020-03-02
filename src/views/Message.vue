<template>
  <div class="message-wrap">
    <ul class="message-list">
      <li
        :class="['message-item', index === shownMessageId ? 'is-selected' : '']"
        v-for="(message, index) in messageList"
        :key="index"
        @click="showMessage(index)"
      >
        <p class="message-item-image"><img :src="message.image" :alt="message.name"></p>
        <p :class="['message-item-name', message.new ? 'hasNew' : '']">{{ message.name }}</p>
      </li>
    </ul>
    <div :class="['message-contents', shownMessage ? 'is-shown' : '']">
      <div class="message-history" ref="history">
        <p class="has-noMessage" v-if="histories.length < 1">メッセージはまだありません。</p>
        <p class="message-history-close is-sp" @click="closeMessage">
          <font-awesome-icon icon="angle-left"></font-awesome-icon>
        </p>
        <div
          class="message-box"
          v-for="(history, index) in histories"
          :key="index"
        >
          <div class="message-box-header">
            <p class="message-box-name">{{ history.name }}</p>
            <p><time>{{ history.date }}</time></p>
          </div>
          <p class="message-box-title"></p>
          <div class="message-box-content">
            {{ history.message }}
          </div>
        </div>
      </div>
      <div class="message-input" ref="input">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          v-model="message"
        ></textarea>
        <p class="message-btn">
          <Button
            class="btn-heighlight"
            @onClick="sendMessage"
          >
            送信する
          </Button>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { messages, messageHistory } from '@/data/data';
import Button from '@/components/Button.vue';

interface InputMessage {
  name: string;
  date: string;
  message: string;
}

@Component({
  components: {
    Button,
  },
})
export default class Message extends Vue {
  messageList = messages;

  histories = [];

  message = '';

  shownMessage = false;

  shownMessageId = 0;

  mounted() {
    const history = this.$refs.history as HTMLElement;
    history.scrollTop = history.scrollHeight;
    this.histories = [...this.histories, ...messageHistory[0]];
    this.scrollToBottom();
  }

  sendMessage() {
    const data: InputMessage = {
      name: '多賀 亮',
      date: '2020/03/03 18:00',
      message: this.message,
    };
    this.histories.push(data);
    this.scrollToBottom();
    this.message = '';
  }

  showMessage(index: number) {
    this.shownMessageId = index;
    this.shownMessage = true;
    this.histories = messageHistory[index] || [];
    this.scrollToBottom();
  }

  closeMessage() {
    this.shownMessage = false;
  }

  scrollToBottom() {
    const history = this.$refs.history as HTMLElement;
    history.scrollTop = history.scrollHeight;
  }
}
</script>

<style lang="scss" scoped>
  $naviWidth: 300px;
  $inputHeight: 264px;
  .message {
    &-wrap {
      height: calc(100vh - (30px + 84px));
      display: flex;
      @media #{$sp} {
        position: relative;
        overflow: hidden;
      }
    }
    &-list {
      height: 100%;
      overflow-y: scroll;
      flex-basis: $naviWidth;
      border-right: 2px solid #ccc;
      @media #{$sp} {
        flex-basis: 100%;
      }
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      position: relative;
      cursor: pointer;
      &.is-selected {
        background: #eee;
      }
      &:before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        transform: translateY(-50%) rotate(45deg);
        position: absolute;
        top: 50%;
        right: 10px;
      }
      &-name {
        font-weight: bold;
        margin-left: 10px;
        flex-basis: calc(100% - 50px);
        &.hasNew {
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: map-get($colors, attention);
            border-radius: 50%;
            transform: translateY(-50%);
            position: absolute;
            top: 50%;
            right: 20px;
          }
        }
      }
      &-image {
        flex-basis: 50px;
        img {
          border-radius: 50%;
        }
      }
    }
    &-contents {
      flex-basis: calc(100% - #{$naviWidth});
      height: 100%;
      @media #{$sp} {
        flex-basis: 100%;
        position: absolute;
        background: map-get($colors, body);
        top: 0;
        left: 100%;
        transition: .4s;
        &.is-shown {
          left: 0;
        }
      }
    }
    &-history {
      border-bottom: 2px solid #ccc;
      height: calc(100vh - #{$inputHeight} - 60px - 84px);
      overflow-y: scroll;
      position: relative;
      .has-noMessage {
        padding: 10px 20px;
        font-weight: bold;
      }
      &-close {
        padding: 5px 20px 0;
        font-size:2.53rem;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
      }
    }
    &-box {
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
      &-header {
        display: flex;
        justify-content: space-between;
      }
      &-name {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
      &-date {
        font-size: 1.2rem;
      }
    }
    &-input {
      padding: 10px 20px;
    }
    &-btn {
      width: 200px;
    }
  }
</style>
