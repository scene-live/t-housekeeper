<template>
  <div>

    <FullCalendar
      defaultView="timeGridWeek"
      timeZone="Asia/Tokyo"
      :plugins="calendarPlugins"
      :header="header"
      :events="eventList"
      @eventClick="eventClick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from '@/data/data';

@Component({
  components: {
    FullCalendar,
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

  eventClick(info): void {
    this.showModal(info.event.start, info.event.end);
  }

  showModal(start: string, end: string): void {
    console.log(`start: ${start}`);
    console.log(`end: ${end}`);
    console.log(this.header.center);
  }
}
</script>

<style lang="scss">
  @import '~@fullcalendar/core/main.css';
  @import '~@fullcalendar/daygrid/main.css';
  @import '~@fullcalendar/timegrid/main.css';

  .fc-button-primary {
    color: map-get($colors, text);
    background-color: map-get($colors, heighlight);
    border-color: map-get($colors, heighlight);
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
</style>
