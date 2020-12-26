/*
 * Icon.js
 */

import React from 'react'
import cx from 'classname'

import { ReactComponent as ApplicationXExecutableSymbolic } from './assets/icons/application-x-executable-symbolic.svg'
import { ReactComponent as AudioVolumeHighSymbolic } from './assets/icons/audio-volume-high-symbolic.svg'
import { ReactComponent as AudioVolumeLowSymbolic } from './assets/icons/audio-volume-low-symbolic.svg'
import { ReactComponent as AudioVolumeMediumSymbolic } from './assets/icons/audio-volume-medium-symbolic.svg'
import { ReactComponent as AudioVolumeMutedSymbolic } from './assets/icons/audio-volume-muted-symbolic.svg'
import { ReactComponent as BookmarkNewSymbolic } from './assets/icons/bookmark-new-symbolic.svg'
import { ReactComponent as CapsLockSymbolic } from './assets/icons/caps-lock-symbolic.svg'
import { ReactComponent as ChangesAllowSymbolic } from './assets/icons/changes-allow-symbolic.svg'
import { ReactComponent as ChangesPreventSymbolic } from './assets/icons/changes-prevent-symbolic.svg'
import { ReactComponent as ColorSelectSymbolic } from './assets/icons/color-select-symbolic.svg'
import { ReactComponent as DialogErrorSymbolic } from './assets/icons/dialog-error-symbolic.svg'
import { ReactComponent as DialogInformationSymbolic } from './assets/icons/dialog-information-symbolic.svg'
import { ReactComponent as DialogPasswordSymbolic } from './assets/icons/dialog-password-symbolic.svg'
import { ReactComponent as DialogQuestionSymbolic } from './assets/icons/dialog-question-symbolic.svg'
import { ReactComponent as DialogWarningSymbolic } from './assets/icons/dialog-warning-symbolic.svg'
import { ReactComponent as DocumentOpenRecentSymbolic } from './assets/icons/document-open-recent-symbolic.svg'
import { ReactComponent as DocumentOpenSymbolic } from './assets/icons/document-open-symbolic.svg'
import { ReactComponent as DocumentSaveAsSymbolic } from './assets/icons/document-save-as-symbolic.svg'
import { ReactComponent as DocumentSaveSymbolic } from './assets/icons/document-save-symbolic.svg'
import { ReactComponent as DriveHarddiskSymbolic } from './assets/icons/drive-harddisk-symbolic.svg'
import { ReactComponent as EditClearAllSymbolic } from './assets/icons/edit-clear-all-symbolic.svg'
import { ReactComponent as EditClearSymbolic } from './assets/icons/edit-clear-symbolic.svg'
import { ReactComponent as EditCopySymbolic } from './assets/icons/edit-copy-symbolic.svg'
import { ReactComponent as EditCutSymbolic } from './assets/icons/edit-cut-symbolic.svg'
import { ReactComponent as EditDeleteSymbolic } from './assets/icons/edit-delete-symbolic.svg'
import { ReactComponent as EditFindSymbolic } from './assets/icons/edit-find-symbolic.svg'
import { ReactComponent as EditPasteSymbolic } from './assets/icons/edit-paste-symbolic.svg'
import { ReactComponent as EditSelectAllSymbolic } from './assets/icons/edit-select-all-symbolic.svg'
import { ReactComponent as EmblemImportantSymbolic } from './assets/icons/emblem-important-symbolic.svg'
import { ReactComponent as EmblemSystemSymbolic } from './assets/icons/emblem-system-symbolic.svg'
import { ReactComponent as EmojiActivitiesSymbolic } from './assets/icons/emoji-activities-symbolic.svg'
import { ReactComponent as EmojiBodySymbolic } from './assets/icons/emoji-body-symbolic.svg'
import { ReactComponent as EmojiFlagsSymbolic } from './assets/icons/emoji-flags-symbolic.svg'
import { ReactComponent as EmojiFoodSymbolic } from './assets/icons/emoji-food-symbolic.svg'
import { ReactComponent as EmojiNatureSymbolic } from './assets/icons/emoji-nature-symbolic.svg'
import { ReactComponent as EmojiObjectsSymbolic } from './assets/icons/emoji-objects-symbolic.svg'
import { ReactComponent as EmojiPeopleSymbolic } from './assets/icons/emoji-people-symbolic.svg'
import { ReactComponent as EmojiRecentSymbolic } from './assets/icons/emoji-recent-symbolic.svg'
import { ReactComponent as EmojiSymbolsSymbolic } from './assets/icons/emoji-symbols-symbolic.svg'
import { ReactComponent as EmojiTravelSymbolic } from './assets/icons/emoji-travel-symbolic.svg'
import { ReactComponent as EyeNotLookingSymbolic } from './assets/icons/eye-not-looking-symbolic.svg'
import { ReactComponent as EyeOpenNegativeFilledSymbolic } from './assets/icons/eye-open-negative-filled-symbolic.svg'
import { ReactComponent as FaceSmileBigSymbolic } from './assets/icons/face-smile-big-symbolic.svg'
import { ReactComponent as FaceSmileSymbolic } from './assets/icons/face-smile-symbolic.svg'
import { ReactComponent as FindLocationSymbolic } from './assets/icons/find-location-symbolic.svg'
import { ReactComponent as FolderDocumentsSymbolic } from './assets/icons/folder-documents-symbolic.svg'
import { ReactComponent as FolderDownloadSymbolic } from './assets/icons/folder-download-symbolic.svg'
import { ReactComponent as FolderMusicSymbolic } from './assets/icons/folder-music-symbolic.svg'
import { ReactComponent as FolderNewSymbolic } from './assets/icons/folder-new-symbolic.svg'
import { ReactComponent as FolderPicturesSymbolic } from './assets/icons/folder-pictures-symbolic.svg'
import { ReactComponent as FolderPublicshareSymbolic } from './assets/icons/folder-publicshare-symbolic.svg'
import { ReactComponent as FolderRemoteSymbolic } from './assets/icons/folder-remote-symbolic.svg'
import { ReactComponent as FolderSavedSearchSymbolic } from './assets/icons/folder-saved-search-symbolic.svg'
import { ReactComponent as FolderSymbolic } from './assets/icons/folder-symbolic.svg'
import { ReactComponent as FolderTemplatesSymbolic } from './assets/icons/folder-templates-symbolic.svg'
import { ReactComponent as FolderVideosSymbolic } from './assets/icons/folder-videos-symbolic.svg'
import { ReactComponent as InsertImageSymbolic } from './assets/icons/insert-image-symbolic.svg'
import { ReactComponent as InsertObjectSymbolic } from './assets/icons/insert-object-symbolic.svg'
import { ReactComponent as ListAddSymbolic } from './assets/icons/list-add-symbolic.svg'
import { ReactComponent as ListRemoveAllSymbolic } from './assets/icons/list-remove-all-symbolic.svg'
import { ReactComponent as ListRemoveSymbolic } from './assets/icons/list-remove-symbolic.svg'
import { ReactComponent as MediaEjectSymbolic } from './assets/icons/media-eject-symbolic.svg'
import { ReactComponent as MediaPlaybackPauseSymbolic } from './assets/icons/media-playback-pause-symbolic.svg'
import { ReactComponent as MediaPlaybackStartSymbolicRtl } from './assets/icons/media-playback-start-symbolic-rtl.svg'
import { ReactComponent as MediaPlaybackStartSymbolic } from './assets/icons/media-playback-start-symbolic.svg'
import { ReactComponent as MediaPlaybackStopSymbolic } from './assets/icons/media-playback-stop-symbolic.svg'
import { ReactComponent as MediaPlaylistRepeatSymbolic } from './assets/icons/media-playlist-repeat-symbolic.svg'
import { ReactComponent as MediaRecordSymbolic } from './assets/icons/media-record-symbolic.svg'
import { ReactComponent as NetworkServerSymbolic } from './assets/icons/network-server-symbolic.svg'
import { ReactComponent as NetworkWorkgroupSymbolic } from './assets/icons/network-workgroup-symbolic.svg'
import { ReactComponent as ObjectSelectSymbolic } from './assets/icons/object-select-symbolic.svg'
import { ReactComponent as OpenMenuSymbolic } from './assets/icons/open-menu-symbolic.svg'
import { ReactComponent as OrientationLandscapeInverseSymbolic } from './assets/icons/orientation-landscape-inverse-symbolic.svg'
import { ReactComponent as OrientationLandscapeSymbolic } from './assets/icons/orientation-landscape-symbolic.svg'
import { ReactComponent as OrientationPortraitInverseSymbolic } from './assets/icons/orientation-portrait-inverse-symbolic.svg'
import { ReactComponent as OrientationPortraitSymbolic } from './assets/icons/orientation-portrait-symbolic.svg'
import { ReactComponent as PanDownSymbolic } from './assets/icons/pan-down-symbolic.svg'
import { ReactComponent as PanEndSymbolicRtl } from './assets/icons/pan-end-symbolic-rtl.svg'
import { ReactComponent as PanEndSymbolic } from './assets/icons/pan-end-symbolic.svg'
import { ReactComponent as PanStartSymbolicRtl } from './assets/icons/pan-start-symbolic-rtl.svg'
import { ReactComponent as PanStartSymbolic } from './assets/icons/pan-start-symbolic.svg'
import { ReactComponent as PanUpSymbolic } from './assets/icons/pan-up-symbolic.svg'
import { ReactComponent as ProcessWorkingSymbolic } from './assets/icons/process-working-symbolic.svg'
import { ReactComponent as SwitchOff } from './assets/icons/switch-off.symbolic.svg'
import { ReactComponent as SwitchOn } from './assets/icons/switch-on.symbolic.svg'
import { ReactComponent as UserDesktopSymbolic } from './assets/icons/user-desktop-symbolic.svg'
import { ReactComponent as UserHomeSymbolic } from './assets/icons/user-home-symbolic.svg'
import { ReactComponent as UserTrashSymbolic } from './assets/icons/user-trash-symbolic.svg'
import { ReactComponent as ViewListSymbolic } from './assets/icons/view-list-symbolic.svg'
import { ReactComponent as ViewMoreSymbolic } from './assets/icons/view-more-symbolic.svg'
import { ReactComponent as ViewRefreshSymbolic } from './assets/icons/view-refresh-symbolic.svg'
import { ReactComponent as WindowCloseSymbolic } from './assets/icons/window-close-symbolic.svg'
import { ReactComponent as WindowMaximizeSymbolic } from './assets/icons/window-maximize-symbolic.svg'
import { ReactComponent as WindowMinimizeSymbolic } from './assets/icons/window-minimize-symbolic.svg'
import { ReactComponent as WindowRestoreSymbolic } from './assets/icons/window-restore-symbolic.svg'

const icons = {
  'application-x-executable-symbolic': ApplicationXExecutableSymbolic,
  'audio-volume-high-symbolic': AudioVolumeHighSymbolic,
  'audio-volume-low-symbolic': AudioVolumeLowSymbolic,
  'audio-volume-medium-symbolic': AudioVolumeMediumSymbolic,
  'audio-volume-muted-symbolic': AudioVolumeMutedSymbolic,
  'bookmark-new-symbolic': BookmarkNewSymbolic,
  'caps-lock-symbolic': CapsLockSymbolic,
  'changes-allow-symbolic': ChangesAllowSymbolic,
  'changes-prevent-symbolic': ChangesPreventSymbolic,
  'color-select-symbolic': ColorSelectSymbolic,
  'dialog-error-symbolic': DialogErrorSymbolic,
  'dialog-information-symbolic': DialogInformationSymbolic,
  'dialog-password-symbolic': DialogPasswordSymbolic,
  'dialog-question-symbolic': DialogQuestionSymbolic,
  'dialog-warning-symbolic': DialogWarningSymbolic,
  'document-open-recent-symbolic': DocumentOpenRecentSymbolic,
  'document-open-symbolic': DocumentOpenSymbolic,
  'document-save-as-symbolic': DocumentSaveAsSymbolic,
  'document-save-symbolic': DocumentSaveSymbolic,
  'drive-harddisk-symbolic': DriveHarddiskSymbolic,
  'edit-clear-all-symbolic': EditClearAllSymbolic,
  'edit-clear-symbolic': EditClearSymbolic,
  'edit-copy-symbolic': EditCopySymbolic,
  'edit-cut-symbolic': EditCutSymbolic,
  'edit-delete-symbolic': EditDeleteSymbolic,
  'edit-find-symbolic': EditFindSymbolic,
  'edit-paste-symbolic': EditPasteSymbolic,
  'edit-select-all-symbolic': EditSelectAllSymbolic,
  'emblem-important-symbolic': EmblemImportantSymbolic,
  'emblem-system-symbolic': EmblemSystemSymbolic,
  'emoji-activities-symbolic': EmojiActivitiesSymbolic,
  'emoji-body-symbolic': EmojiBodySymbolic,
  'emoji-flags-symbolic': EmojiFlagsSymbolic,
  'emoji-food-symbolic': EmojiFoodSymbolic,
  'emoji-nature-symbolic': EmojiNatureSymbolic,
  'emoji-objects-symbolic': EmojiObjectsSymbolic,
  'emoji-people-symbolic': EmojiPeopleSymbolic,
  'emoji-recent-symbolic': EmojiRecentSymbolic,
  'emoji-symbols-symbolic': EmojiSymbolsSymbolic,
  'emoji-travel-symbolic': EmojiTravelSymbolic,
  'eye-not-looking-symbolic': EyeNotLookingSymbolic,
  'eye-open-negative-filled-symbolic': EyeOpenNegativeFilledSymbolic,
  'face-smile-big-symbolic': FaceSmileBigSymbolic,
  'face-smile-symbolic': FaceSmileSymbolic,
  'find-location-symbolic': FindLocationSymbolic,
  'folder-documents-symbolic': FolderDocumentsSymbolic,
  'folder-download-symbolic': FolderDownloadSymbolic,
  'folder-music-symbolic': FolderMusicSymbolic,
  'folder-new-symbolic': FolderNewSymbolic,
  'folder-pictures-symbolic': FolderPicturesSymbolic,
  'folder-publicshare-symbolic': FolderPublicshareSymbolic,
  'folder-remote-symbolic': FolderRemoteSymbolic,
  'folder-saved-search-symbolic': FolderSavedSearchSymbolic,
  'folder-symbolic': FolderSymbolic,
  'folder-templates-symbolic': FolderTemplatesSymbolic,
  'folder-videos-symbolic': FolderVideosSymbolic,
  'insert-image-symbolic': InsertImageSymbolic,
  'insert-object-symbolic': InsertObjectSymbolic,
  'list-add-symbolic': ListAddSymbolic,
  'list-remove-all-symbolic': ListRemoveAllSymbolic,
  'list-remove-symbolic': ListRemoveSymbolic,
  'media-eject-symbolic': MediaEjectSymbolic,
  'media-playback-pause-symbolic': MediaPlaybackPauseSymbolic,
  'media-playback-start-symbolic-rtl': MediaPlaybackStartSymbolicRtl,
  'media-playback-start-symbolic': MediaPlaybackStartSymbolic,
  'media-playback-stop-symbolic': MediaPlaybackStopSymbolic,
  'media-playlist-repeat-symbolic': MediaPlaylistRepeatSymbolic,
  'media-record-symbolic': MediaRecordSymbolic,
  'network-server-symbolic': NetworkServerSymbolic,
  'network-workgroup-symbolic': NetworkWorkgroupSymbolic,
  'object-select-symbolic': ObjectSelectSymbolic,
  'open-menu-symbolic': OpenMenuSymbolic,
  'orientation-landscape-inverse-symbolic': OrientationLandscapeInverseSymbolic,
  'orientation-landscape-symbolic': OrientationLandscapeSymbolic,
  'orientation-portrait-inverse-symbolic': OrientationPortraitInverseSymbolic,
  'orientation-portrait-symbolic': OrientationPortraitSymbolic,
  'pan-down-symbolic': PanDownSymbolic,
  'pan-end-symbolic-rtl': PanEndSymbolicRtl,
  'pan-end-symbolic': PanEndSymbolic,
  'pan-start-symbolic-rtl': PanStartSymbolicRtl,
  'pan-start-symbolic': PanStartSymbolic,
  'pan-up-symbolic': PanUpSymbolic,
  'process-working-symbolic': ProcessWorkingSymbolic,
  'switch-off': SwitchOff.symbolic,
  'switch-on': SwitchOn.symbolic,
  'user-desktop-symbolic': UserDesktopSymbolic,
  'user-home-symbolic': UserHomeSymbolic,
  'user-trash-symbolic': UserTrashSymbolic,
  'view-list-symbolic': ViewListSymbolic,
  'view-more-symbolic': ViewMoreSymbolic,
  'view-refresh-symbolic': ViewRefreshSymbolic,
  'window-close-symbolic': WindowCloseSymbolic,
  'window-maximize-symbolic': WindowMaximizeSymbolic,
  'window-minimize-symbolic': WindowMinimizeSymbolic,
  'window-restore-symbolic': WindowRestoreSymbolic,
}

function Icon({ className, name }) {

  return (
    <span className={cx('Icon', className)}>
      {React.createElement(icons[name])}
    </span>
  )
}

export default Icon
