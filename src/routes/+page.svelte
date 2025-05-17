
<script>
  import "@onsvisual/svelte-components/css/main.css";
  import {
    Header,
    Hero,
    Highlight,
    Section,
    Grid,
    Divider,
    Blockquote,
    Scroller,
    ScrollerSection
  } from "@onsvisual/svelte-components";
  import { base } from '$app/paths';

  export let data;

  const scrollerColors = ["#ddd", "#777", "#222"];
  let scrollerColor = scrollerColors[0];
  let contents = data.text.text.blocks;
</script>

<style>
  /* Banner of images under the title, no horizontal scroll */
  .image-banner {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
    flex-wrap: nowrap;
  }
  .image-banner .image-wrapper {
    flex: 1 1 0;
    text-align: center;
  }
  .image-banner img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  .image-banner .caption {
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.25rem;
  }
  /* Override for the Tank Man banner to use natural image height */
  .image-banner.auto-height img {
    height: auto;
    max-height: none;
    width: 100%;
  }
  @media (max-width: 768px) {
    .image-banner {
      flex-wrap: wrap;
    }
    .image-banner img {
      height: auto;
      max-width: 100%;
    }
  }
</style>

{#each contents as block}
  {#if block.Type === "Header"}
    <Header compact={block.Compact === "true"} />

  {:else if block.Type === "Hero"}
    <Hero title={block.Title} lede={block.Lede} date={block.Date} />

  {:else if block.Type === "Highlight"}
    <Highlight marginBottom={block.marginBottom === "true"}>
      {#each block.texts as text}
        <p>{@html text.value}</p>
      {/each}
    </Highlight>

  {:else if block.Type === "Section" && block.Title === "Years Before the Incident (1978–1988)"}
    <Section marginTop title={block.Title}>
      <div class="image-banner">
        <div class="image-wrapper">
          <img src="{base}/images/Xidan-Democracy-Wall.jpg" alt="Students at the Democracy Wall, 1978" />
          <div class="caption">Democracy Wall Movement, Beijing, 1978. Photo: Xidan Archives.</div>
        </div>
        <div class="image-wrapper">
          <img src="{base}/images/fang-tiananmen.jpg" alt="Fang Lizhi at Tiananmen Square, 1989" />
          <div class="caption">Fang Lizhi at Tiananmen Square demonstrations, 1989. Photo: IAS.</div>
        </div>
        <div class="image-wrapper">
          <img src="{base}/images/Hu-YaoBang.jpg" alt="Portrait of Hu Yaobang" />
          <div class="caption">Hu Yaobang. Photo: Sohu News.</div>
        </div>
      </div>

      {#each block.texts as text}
        {#if text.type === "text"}
          <p>{@html text.value}</p>
        {:else if text.type === "Blockquote"}
          <Blockquote attribution={text.value.Attribution}>
            {@html text.value.Text}
          </Blockquote>
        {/if}
      {/each}
    </Section>

  {:else if block.Type === "Section" && block.Title === "Months Before the Incident (April–May 1989)"}
    <Section marginTop title={block.Title}>
      <div class="image-banner">
        <div class="image-wrapper">
          <img src="{base}/images/death-hu.jpg" alt="Students lay wreaths for Hu Yaobang, April 1989" />
          <div class="caption">Students lay wreaths for Hu Yaobang, Tiananmen Square, April 19, 1989.</div>
        </div>
        <div class="image-wrapper">
          <img src="{base}/images/PeoplesDailyEditorial26.jpg" alt="People’s Daily editorial, April 26, 1989" />
          <div class="caption">April 26, 1989 People’s Daily editorial. Photo: People’s Daily.</div>
        </div>
        <div class="image-wrapper">
          <img src="{base}/images/zhao.jpg" alt="Zhao Ziyang, 1985" />
          <div class="caption">Zhao Ziyang, 1985. Photo: Xinhua.</div>
        </div>
      </div>

      {#each block.texts as text}
        {#if text.type === "text"}
          <p>{@html text.value}</p>
        {:else if text.type === "Blockquote"}
          <Blockquote attribution={text.value.Attribution}>
            {@html text.value.Text}
          </Blockquote>
        {/if}
      {/each}
    </Section>

  {:else if block.Type === "Section" && block.Title === "Days Before the Incident (June 1–3, 1989)"}
    <Section marginTop title={block.Title}>
      <div class="image-banner">
        <div class="image-wrapper">
          <img src="{base}/images/Chinese_Premier_Li_Peng_1996.jpg" alt="Premier Li Peng, 1996" />
          <div class="caption">Premier Li Peng, 1996. Photo: CCTV.</div>
        </div>
        <div class="image-wrapper">
          <img src="{base}/images/2june.jpg" alt="Protests in Tiananmen Square, June 2, 1989" />
          <div class="caption">Pro-democracy protests in Tiananmen Square, June 2, 1989.</div>
        </div>
        <div class="image-wrapper">
          <img src="{base}/images/deng.jpg" alt="Deng Xiaoping, 1989" />
          <div class="caption">Deng Xiaoping, 1989. Photo: Xinhua.</div>
        </div>
      </div>

      {#each block.texts as text}
        {#if text.type === "text"}
          <p>{@html text.value}</p>
        {/if}
      {/each}
    </Section>

  {:else if block.Type === "Section" && block.Title === "The Massacre (Night of June 3–4, 1989)"}
    <Section marginTop title={block.Title}>
      <div class="image-banner auto-height">
        <div class="image-wrapper">
          <img src="{base}/images/tank-man.jpg" alt="Tank Man standoff, June 5, 1989" />
          <div class="caption">Tank Man standoff, June 5, 1989. Photo: Jeff Widener/AP.</div>
        </div>
      </div>

      {#each block.texts as text}
        <p>{@html text.value}</p>
      {/each}
    </Section>

  {:else if block.Type === "Section"}
    <Section marginTop={block.marginTop === "true"} title={block.Title}>
      {#each block.texts as text}
        {#if text.type === "text"}
          <p>{@html text.value}</p>
        {:else if text.type === "Blockquote"}
          <Blockquote attribution={text.value.Attribution}>
            {@html text.value.Text}
          </Blockquote>
        {/if}
      {/each}
    </Section>

  {:else if block.Type === "Grid"}
    <Grid caption={block.Caption}>
      {#each block.cells as cell}
        <div class="grid-cell">{cell.value}</div>
      {/each}
    </Grid>

  {:else if block.Type === "Divider"}
    <Divider />

  {:else if block.Type === "Scroller"}
    <Scroller
      id={block.Id}
      splitscreen={block.Splitscreen === "true"}
      on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
      <div slot="background">
        <Grid width="full" height="full">
          <div class="placeholder-block" style:background-color={scrollerColor}></div>
        </Grid>
      </div>
      <div slot="foreground">
        {#each block.foreground.ScrollerSections as section}
          <ScrollerSection>
            <p>{@html section.value}</p>
          </ScrollerSection>
        {/each}
      </div>
    </Scroller>
  {/if}
{/each}
