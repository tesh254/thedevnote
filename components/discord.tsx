/* eslint-disable react/no-unescaped-entities */
import { css } from "goober";
import React from "react";

const DISCORD_LINK = "https://discord.gg/rJuy8brmKn";

type Props = {
  text: React.ReactElement;
};

export default function Discord(props: Props): React.ReactElement {
  return (
    <a
      href={DISCORD_LINK}
      target="_blank"
      className={`rounded-lg ${css`
        box-shadow: 0px 0px 2px #fff;
        max-width: 400px;
        min-width: 300px;
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-template-rows: 100px;
        grid-column-gap: 8px;
        grid-row-gap: 0px;
        padding: 8px;
        margin: 4px;
      `}`} rel="noreferrer"
    >
      <section className="text-white">
        <svg
          id="Bold"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current h-full w-full"
        >
          <path d="m3.58 21.196h14.259l-.681-2.205 1.629 1.398 1.493 1.338 2.72 2.273v-21.525c-.068-1.338-1.22-2.475-2.648-2.475l-16.767.003c-1.427 0-2.585 1.139-2.585 2.477v16.24c0 1.411 1.156 2.476 2.58 2.476zm10.548-15.513-.033.012.012-.012zm-7.631 1.269c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537s.272-.133.747-.336c3.021-1.188 6.32-1.102 9.374.402 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-.535.337-1.023.537-1.419.737-.609.268-1.219.4-1.828.535-2.884.468-4.503-.315-6.033-.936l-.523-.266s.609.936 2.174 1.404c-.411.469-.818 1.002-.818 1.002-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z" />
          <path d="m14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
          <path d="m9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
        </svg>
      </section>
      <section className="flex place-items-center">
        <section>
          <h1 className="text-white font-bold text-2xl">Join TDN's Discord</h1>
          <p className="text-gray-400">{props.text}</p>
        </section>
      </section>
    </a>
  );
}
