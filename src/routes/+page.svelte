<script>
    import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
    import {
        Header,
        Hero,
        Highlight,
        Section,
        Grid,
        Divider,
        Main,
        Blockquote,
        Em,
        Scroller,
        ScrollerSection,
        Footer,
    } from "@onsvisual/svelte-components";

    export let data;//import the data for the content

    const scrollerColors = ["#ddd", "#777", "#222"];
    let scrollerColor = scrollerColors[0];

    let contents = data.text.text.blocks;
    // console.log(contents);
</script>

{#each contents as block}
    {#if block.Type === "Header"}
        <Header compact={block.Compact === "true"} />
    {:else if block.Type === "Hero"}
        <Hero title={block.Title} lede={block.Lede} date={block.Date} />
    {:else if block.Type === "Highlight"}
        <Highlight marginBottom={block.marginBottom === "true"}>
            {#each block.texts as text}
                <p>{text.value}</p>
            {/each}
        </Highlight>
    {:else if block.Type === "Section"}
        <Section marginTop={block.marginTop === "true"}>
            {#each block.texts as text}
                {#if text.type === "text"}
                    <p>{text.value}</p>
                {:else if text.type === "Blockquote"}
                    <Blockquote attribution={text.value.Attribution}
                        >{text.value.Text}</Blockquote
                    >
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
            on:change="{(e) =>(scrollerColor = scrollerColors[e.detail.index])}">
            <div slot="background">
                <Grid width="full" height="full">
                    <div
                        class="placeholder-block"
                        style:background-color={scrollerColor}
                    ></div>
                </Grid>
            </div>
            <div slot="foreground">
                {#each block.foreground.ScrollerSections as section}
                    <ScrollerSection>
                        <p>
                            {section.value}
                        </p>
                    </ScrollerSection>
                {/each}
            </div>
        </Scroller>
    {:else if block.Type === "Footer"}
        <Footer compact={block.Compact === "true"} />
    {/if}
{/each}
