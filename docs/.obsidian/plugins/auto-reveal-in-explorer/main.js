"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => AutoRevealInExplorerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// reveal.ts
var ExpansionTracker = class {
  constructor() {
    /** Folder paths expanded by the plugin for the current reveal. */
    this.expandedFolderPaths = /* @__PURE__ */ new Set();
  }
  /**
   * Record that the plugin expanded a folder.
   */
  trackExpansion(folderPath) {
    this.expandedFolderPaths.add(folderPath);
  }
  /**
   * Collapse all previously-tracked folders that are NOT in the given set of
   * folder paths to keep. Then clear tracking state.
   */
  collapsePreviousExpansions(folderPathsToKeep, explorerView) {
    for (const folderPath of this.expandedFolderPaths) {
      if (folderPathsToKeep.has(folderPath)) {
        continue;
      }
      const folderItem = explorerView.fileItems[folderPath];
      if (folderItem == null ? void 0 : folderItem.setCollapsed) {
        folderItem.setCollapsed(true);
      }
    }
    const keptPaths = /* @__PURE__ */ new Set();
    for (const folderPath of this.expandedFolderPaths) {
      if (folderPathsToKeep.has(folderPath)) {
        keptPaths.add(folderPath);
      }
    }
    this.expandedFolderPaths = keptPaths;
  }
  /**
   * Collapse ALL tracked folders and clear state.
   * Used when no active file remains (all files closed).
   */
  collapseAllTracked(explorerView) {
    this.collapsePreviousExpansions(/* @__PURE__ */ new Set(), explorerView);
  }
  /**
   * Get the current set of tracked folder paths (for testing/debugging).
   */
  getTrackedPaths() {
    return this.expandedFolderPaths;
  }
};
function getVisibleExplorerLeaf(app) {
  const leaves = app.workspace.getLeavesOfType("file-explorer");
  if (leaves.length === 0) {
    return null;
  }
  for (const leaf of leaves) {
    const computedStyle = window.getComputedStyle(leaf.containerEl);
    if (computedStyle.display !== "none") {
      return leaf;
    }
  }
  return null;
}
function getParentFolderPaths(filePath) {
  const parts = filePath.split("/");
  parts.pop();
  const paths = [];
  while (parts.length > 0) {
    paths.push(parts.join("/"));
    parts.pop();
  }
  return paths;
}
function isFolderExcluded(folderPath, excludedFolders) {
  for (const excluded of excludedFolders) {
    if (folderPath === excluded || folderPath.startsWith(excluded + "/")) {
      return true;
    }
  }
  return false;
}
function expandParentsWithTracking(filePath, explorerView, tracker, excludedFolders = []) {
  const folderPaths = getParentFolderPaths(filePath);
  for (const folderPath of folderPaths) {
    if (isFolderExcluded(folderPath, excludedFolders)) {
      break;
    }
    const folderItem = explorerView.fileItems[folderPath];
    if (!(folderItem == null ? void 0 : folderItem.setCollapsed)) {
      continue;
    }
    if (folderItem.collapsed !== false) {
      tracker.trackExpansion(folderPath);
    }
    folderItem.setCollapsed(false);
  }
}
function expandParents(fileItem) {
  let current = fileItem.parent;
  while (current) {
    if (current.setCollapsed) {
      current.setCollapsed(false);
    }
    current = current.parent;
  }
}
function findScrollableAncestor(element) {
  let current = element.parentElement;
  while (current) {
    const style = window.getComputedStyle(current);
    if (style.overflowY === "auto" || style.overflowY === "scroll") {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function scrollToElementInContainer(element, scrollContainer) {
  const elementRect = element.getBoundingClientRect();
  const containerRect = scrollContainer.getBoundingClientRect();
  const isVisible = elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom;
  if (!isVisible) {
    const offsetInContainer = elementRect.top - containerRect.top + scrollContainer.scrollTop;
    const centeredScroll = offsetInContainer - scrollContainer.clientHeight / 2;
    scrollContainer.scrollTop = Math.max(0, centeredScroll);
  }
}
function estimateScrollPosition(filePath, explorerView, scrollContainer) {
  const sortedPaths = Object.keys(explorerView.fileItems).sort();
  const targetIndex = sortedPaths.indexOf(filePath);
  const totalItems = sortedPaths.length;
  const contentDiv = scrollContainer.firstElementChild;
  const totalHeight = contentDiv ? parseFloat(getComputedStyle(contentDiv).minHeight) || contentDiv.scrollHeight : scrollContainer.scrollHeight;
  const estimatedPosition = targetIndex / totalItems * totalHeight;
  scrollContainer.scrollTop = Math.max(
    0,
    estimatedPosition - scrollContainer.clientHeight / 2
  );
}
function revealFileInExplorer(app, file, tracker, excludedFolders = []) {
  const leaf = getVisibleExplorerLeaf(app);
  if (!leaf) {
    return;
  }
  const explorerView = leaf.view;
  if (!explorerView.fileItems) {
    return;
  }
  const fileItem = explorerView.fileItems[file.path];
  if (!fileItem) {
    return;
  }
  if (tracker) {
    const newParentPaths = new Set(getParentFolderPaths(file.path));
    tracker.collapsePreviousExpansions(newParentPaths, explorerView);
    expandParentsWithTracking(
      file.path,
      explorerView,
      tracker,
      excludedFolders
    );
  } else {
    expandParents(fileItem);
  }
  const element = fileItem.selfEl;
  if (!element) {
    return;
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      var _a, _b;
      const scrollContainer = (_b = (_a = findScrollableAncestor(element)) != null ? _a : explorerView.containerEl.querySelector(
        ".nav-files-container"
      )) != null ? _b : explorerView.containerEl;
      if (activeDocument.body.contains(element)) {
        scrollToElementInContainer(element, scrollContainer);
      } else {
        estimateScrollPosition(file.path, explorerView, scrollContainer);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (activeDocument.body.contains(element)) {
              scrollToElementInContainer(element, scrollContainer);
            }
          });
        });
      }
    });
  });
}
function collapseAllTrackedFolders(app, tracker) {
  const leaf = getVisibleExplorerLeaf(app);
  if (!leaf) {
    return;
  }
  const explorerView = leaf.view;
  if (!explorerView.fileItems) {
    return;
  }
  tracker.collapseAllTracked(explorerView);
}
function createDebouncedReveal(app, delayMs = 150, tracker, excludedFolders = []) {
  let timeoutId = null;
  function reveal(file) {
    if (timeoutId !== null) {
      activeWindow.clearTimeout(timeoutId);
    }
    timeoutId = activeWindow.setTimeout(() => {
      timeoutId = null;
      revealFileInExplorer(app, file, tracker, excludedFolders);
    }, delayMs);
  }
  function cancel() {
    if (timeoutId !== null) {
      activeWindow.clearTimeout(timeoutId);
      timeoutId = null;
    }
  }
  return { reveal, cancel };
}

// settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  autoReveal: true,
  revealDelay: 150,
  excludedFolders: []
};
var AutoRevealInExplorerSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Auto-reveal active file").setDesc("Automatically reveal the active file in the file explorer when switching files.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoReveal).onChange(async (value) => {
        this.plugin.settings.autoReveal = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Reveal delay").setDesc("Debounce delay in milliseconds before revealing the file (50\u20131000).").addSlider(
      (slider) => slider.setLimits(50, 1e3, 10).setValue(this.plugin.settings.revealDelay).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.revealDelay = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Excluded folders").setDesc("Folders listed here will not be auto-expanded during reveal. If an excluded folder is in a file's parent chain, the file will not be revealed.").setHeading();
    const excludedListContainer = containerEl.createDiv("excluded-folders-list");
    this.renderExcludedFoldersList(excludedListContainer);
    let inputValue = "";
    new import_obsidian.Setting(containerEl).setName("Add excluded folder").setDesc('Enter a folder path (e.g. "templates" or "projects/archive").').addText(
      (text) => text.setPlaceholder("Folder/path").onChange((value) => {
        inputValue = value;
      })
    ).addButton(
      (button) => button.setButtonText("Add").setCta().onClick(async () => {
        const trimmed = inputValue.trim().replace(/\/+$/, "");
        if (!trimmed) {
          return;
        }
        if (this.plugin.settings.excludedFolders.includes(trimmed)) {
          return;
        }
        this.plugin.settings.excludedFolders.push(trimmed);
        await this.plugin.saveSettings();
        this.renderExcludedFoldersList(excludedListContainer);
        inputValue = "";
        this.display();
      })
    );
  }
  renderExcludedFoldersList(container) {
    container.empty();
    if (this.plugin.settings.excludedFolders.length === 0) {
      container.createEl("p", {
        text: "No excluded folders.",
        cls: "setting-item-description"
      });
      return;
    }
    for (const folderPath of this.plugin.settings.excludedFolders) {
      new import_obsidian.Setting(container).setName(folderPath).addButton(
        (button) => button.setButtonText("Remove").setWarning().onClick(async () => {
          this.plugin.settings.excludedFolders = this.plugin.settings.excludedFolders.filter((path) => path !== folderPath);
          await this.plugin.saveSettings();
          this.renderExcludedFoldersList(container);
        })
      );
    }
  }
};

// main.ts
var AutoRevealInExplorerPlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.debouncedReveal = null;
    this.expansionTracker = new ExpansionTracker();
  }
  async onload() {
    await this.loadSettings();
    this.rebuildDebouncedReveal();
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        if (file && this.settings.autoReveal && this.debouncedReveal) {
          this.debouncedReveal.reveal(file);
        } else if (!file && this.settings.autoReveal) {
          collapseAllTrackedFolders(this.app, this.expansionTracker);
        }
      })
    );
    this.addCommand({
      id: "reveal-active-file",
      name: "Reveal active file",
      callback: () => {
        const file = this.app.workspace.getActiveFile();
        if (file) {
          revealFileInExplorer(this.app, file);
        }
      }
    });
    this.addSettingTab(new AutoRevealInExplorerSettingTab(this.app, this));
  }
  onunload() {
    if (this.debouncedReveal) {
      this.debouncedReveal.cancel();
      this.debouncedReveal = null;
    }
  }
  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_SETTINGS,
      await this.loadData()
    );
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.rebuildDebouncedReveal();
  }
  /**
   * Recreate the debounced reveal function with the current delay setting.
   * Called on load and whenever settings change.
   */
  rebuildDebouncedReveal() {
    if (this.debouncedReveal) {
      this.debouncedReveal.cancel();
    }
    this.debouncedReveal = createDebouncedReveal(
      this.app,
      this.settings.revealDelay,
      this.expansionTracker,
      this.settings.excludedFolders
    );
  }
};


/* nosourcemap */