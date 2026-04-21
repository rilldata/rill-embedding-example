"use client";

import { useState, useMemo } from "react";
import IframeFetcher from "../../components/IframeFetcher";

const USERS = [
  { id: "user-alice-123", label: "Alice" },
  { id: "user-bob-456", label: "Bob" },
];

const SharedChatsPage = () => {
  const org = "demo";
  const project = "rill-embed";
  const [selectedUser, setSelectedUser] = useState(USERS[0]);

  const iframeBody = useMemo(
    () => ({
      resource: "embed_explore",
      navigation: true,
      external_user_id: "shared-user",
    }),
    [],
  );

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Shared Chats</h2>
      <p className="text-gray-600 mb-6">
        By passing an{" "}
        <code className="bg-gray-100 text-gray-800 px-1 rounded">
          external_user_id
        </code>{" "}
        in the iframe request body, you enable persistent per-user state. This
        page demonstrates how to override the default per-user behavior by
        passing a <em>static</em> value — when all users share the same{" "}
        <code className="bg-gray-100 text-gray-800 px-1 rounded">
          external_user_id
        </code>
        , they see and contribute to the same chat thread.
      </p>
      <p className="text-gray-600 mb-6">
        Try switching between users below. Even though the active "user"
        changes, both Alice and Bob share the same AI chat history because the{" "}
        <code className="bg-gray-100 text-gray-800 px-1 rounded">
          external_user_id
        </code>{" "}
        is always{" "}
        <code className="bg-gray-100 text-gray-800 px-1 rounded">
          "shared-user"
        </code>
        .
      </p>

      {/* User Selector */}
      <div className="bg-gray-50 p-4 rounded-lg border mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Select a user:
        </h3>
        <div className="flex gap-3">
          {USERS.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedUser.id === user.id
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {user.label}
              <span className="ml-2 text-xs opacity-75">({user.id})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Code Example */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Request body:
        </h3>
        <div className="bg-gray-100 p-3 rounded font-mono text-sm">
          {JSON.stringify(iframeBody)}
        </div>
      </div>

      <div className="mb-8">
        <IframeFetcher org={org} project={project} body={iframeBody} />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            How it works
          </h3>
          <p className="text-gray-600 mb-3">
            When requesting an iframe token from the Rill API, include an{" "}
            <code className="bg-gray-100 text-gray-800 px-1 rounded">
              external_user_id
            </code>{" "}
            field in the request body. Rill uses this value to namespace
            persistent per-user state — currently AI chat history. Any two
            requests with the same{" "}
            <code className="bg-gray-100 text-gray-800 px-1 rounded">
              external_user_id
            </code>{" "}
            will share the same conversation. Setting it to a static string
            (e.g.{" "}
            <code className="bg-gray-100 text-gray-800 px-1 rounded">
              "shared-user"
            </code>
            ) means all your end users see a single shared thread.
          </p>
          <div className="bg-gray-100 p-3 rounded font-mono text-sm">
            {`POST /v1/organizations/{org}/projects/{project}/iframe
{
  "resource": "embed_explore",
  "external_user_id": "shared-user"
}`}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            When to use this
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Internal team dashboards where a shared chat context is useful
            </li>
            <li>
              Customer-facing portals where all users of the same account should
              see the same AI conversation
            </li>
            <li>
              Demo environments where you want every visitor to see a pre-seeded
              chat history
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Per-user vs. shared chats
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 border-b">Setup</th>
                  <th className="px-4 py-3 border-b">external_user_id</th>
                  <th className="px-4 py-3 border-b">Result</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">Per-user chats</td>
                  <td className="px-4 py-3">
                    <code className="bg-gray-100 px-1 rounded">
                      user-123
                    </code>{" "}
                    (dynamic)
                  </td>
                  <td className="px-4 py-3">
                    Each user has their own persistent state (currently: chat
                    history)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Shared chats</td>
                  <td className="px-4 py-3">
                    <code className="bg-gray-100 px-1 rounded">
                      shared-user
                    </code>{" "}
                    (static)
                  </td>
                  <td className="px-4 py-3">
                    All users see the same conversation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-4 mt-8">
        Related Links:
      </h3>
      <ul className="space-y-2">
        <li>
          <a
            href="https://docs.rilldata.com/integrate/embedding"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            Embedding Documentation
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rilldata/rill-embedding-example/blob/main/netlify/functions/get-iframe.ts"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            Iframe Function Implementation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SharedChatsPage;
