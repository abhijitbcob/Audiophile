<template>
  <section class="category__navigation">
    <div v-for="item in items" :key="item.title">
      <Card :bg-color="'#f1f1f1'" :title="item.title">
        <template #image>
          <img
            :src="item.image"
            :class="`img ${item.slug}`"
            :alt="item.title"
            :aria-label="item.title"
            :title="item.title"
          />
        </template>
        <template #title>
          <h4>{{ item.title }}</h4>
        </template>
        <template #btn>
          <v-btn
            class="btn btn--text"
            aria-label="Shop"
            title="Shop"
            :to="'/' + item.slug"
            >SHOP &nbsp;
            <IconRight />
          </v-btn>
        </template>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '../Layout/UI/Card.vue'
import IconRight from '~/static/images/shared/desktop/icon-arrow-right.svg?inline'
import './Categories.scss'
export default {
  components: { Card, IconRight },
  data: () => ({
    items: [
      {
        title: 'Headphones',
        image: '/images/shared/desktop/image-headphones.png',
        slug: 'headphones',
      },
      {
        title: 'Speakers',
        image: '/images/shared/desktop/image-speakers.png',
        slug: 'speakers',
      },
      {
        title: 'Earphones',
        image: '/images/shared/desktop/image-earphones.png',
        slug: 'earphones',
      },
    ],
  }),
}
</script>

<style lang="scss"></style>
