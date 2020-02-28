<template>
  <div>
    <FullCalendar
      defaultView="timeGridWeek"
      locale="ja"
      :plugins="calendarPlugins"
      :header="header"
      :events="eventList"
      @eventClick="eventClick"
    />
    <Modal
      ref="modal"
      :class="modalClassName"
      :date="date"
      :startTime="startTime"
      :endTime="endTime"
      @resetShowModal="resetShowModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from '@/data/data';
import Modal from '@/components/Modal.vue';

@Component({
  components: {
    FullCalendar,
    Modal,
  },
})
export default class Calendar extends Vue {
  calendarPlugins = [dayGridPlugin, timeGridPlugin];

  header = {
    left: 'today prev,next',
    center: 'title',
    right: 'timeGridWeek, dayGridMonth',
  };

  eventList = events;

  date = '';

  startTime = '';

  endTime = '';

  showModal = false;

  get modalClassName() {
    return this.showModal ? 'is-shown' : '';
  }

  eventClick(info): void {
    const { start } = info.event;
    const { end } = info.event;

    this.date = `${start.getFullYear()}/${Calendar.format(start.getMonth() + 1)}/${Calendar.format(start.getDate())}`;
    this.startTime = `${Calendar.format(start.getHours())}:${Calendar.format(start.getMinutes())}`;
    this.endTime = `${Calendar.format(end.getHours())}:${Calendar.format(end.getMinutes())}`;

    this.showModal = true;
  }

  resetShowModal() {
    this.showModal = false;
  }

  static format = (d: number) => `00${d}`.slice(-2);
}
</script>

<style lang="scss">
  @import '~@fullcalendar/core/main.css';
  @import '~@fullcalendar/daygrid/main.css';
  @import '~@fullcalendar/timegrid/main.css';

  .fc-timeGridWeek-view {
    .fc-day-grid {
      display: none;
    }
  }
  .fc-time-grid .fc-slats .fc-minor td {
    border: none;
  }
  .fc-button-primary {
    color: map-get($colors, text);
    background-color: map-get($colors, heighlight);
    border-color: map-get($colors, heighlight);
    &:hover {
      color: map-get($colors, text);
      background-color: map-get($colors, heighlight);
      border-color: map-get($colors, heighlight);
      opacity: .8;
    }
    &:not(:disabled) {
      &:active, &.fc-button-active {
        color: map-get($colors, text);
        background-color: map-get($colors, heighlight);
        border-color: map-get($colors, heighlight);
      }
    }
    &:disabled {
      color: map-get($colors, base);
      background-color: map-get($colors, disabled);
      border-color: map-get($colors, disabled);
      &:hover {
        opacity: .65;
      }
    }
  }
  .fc-event {
    color: map-get($colors, text);
    background: map-get($colors, secodary);
    border-color: map-get($colors, secodary);
    cursor: pointer;
    &:hover {
      color: map-get($colors, text);
    }
  }

  @media #{$sp} {
    .fc-toolbar > * > :first-child {
      margin-bottom: 5px;
    }
    .fc-toolbar > * > :not(:first-child) {
      margin-left: 0;
    }
    .fc-left {
      width: 82px;
    }
    .fc-center {
      font-size: 1.2rem;
    }
    .fc-right {
      text-align: right;
      width: 61px;
    }
    .fc-axis {
      display: none;
    }
    .fc-day-header {
      font-size: 1.2rem;
    }
  }
</style>
