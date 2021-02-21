/*
 * Icon.js
 */

import React, { useState, useEffect } from 'react'
import prop from 'prop-types'
import cx from 'clsx'

import AcAdapterSymbolic from '../icons/ac-adapter-symbolic.js';
import AccessoriesCalculatorSymbolic from '../icons/accessories-calculator-symbolic.js';
import AccessoriesCharacterMapSymbolic from '../icons/accessories-character-map-symbolic.js';
import AccessoriesDictionarySymbolic from '../icons/accessories-dictionary-symbolic.js';
import AccessoriesTextEditorSymbolic from '../icons/accessories-text-editor-symbolic.js';
import ActionUnavailableSymbolic from '../icons/action-unavailable-symbolic.js';
import AddressBookNewSymbolic from '../icons/address-book-new-symbolic.js';
import AirplaneModeSymbolic from '../icons/airplane-mode-symbolic.js';
import AlarmSymbolic from '../icons/alarm-symbolic.js';
import AppletsScreenshooterSymbolic from '../icons/applets-screenshooter-symbolic.js';
import ApplicationCertificateSymbolic from '../icons/application-certificate-symbolic.js';
import ApplicationExitSymbolic from '../icons/application-exit-symbolic.js';
import ApplicationRssXmlSymbolic from '../icons/application-rss-xml-symbolic.js';
import ApplicationsEngineeringSymbolic from '../icons/applications-engineering-symbolic.js';
import ApplicationsGamesSymbolic from '../icons/applications-games-symbolic.js';
import ApplicationsGraphicsSymbolic from '../icons/applications-graphics-symbolic.js';
import ApplicationsMultimediaSymbolic from '../icons/applications-multimedia-symbolic.js';
import ApplicationsScienceSymbolic from '../icons/applications-science-symbolic.js';
import ApplicationsSystemSymbolic from '../icons/applications-system-symbolic.js';
import ApplicationsUtilitiesSymbolic from '../icons/applications-utilities-symbolic.js';
import ApplicationXAddonSymbolic from '../icons/application-x-addon-symbolic.js';
import ApplicationXApplianceSymbolic from '../icons/application-x-appliance-symbolic.js';
import ApplicationXExecutableSymbolic from '../icons/application-x-executable-symbolic.js';
import ApplicationXFirmwareSymbolic from '../icons/application-x-firmware-symbolic.js';
import AppointmentMissedSymbolic from '../icons/appointment-missed-symbolic.js';
import AppointmentNewSymbolic from '../icons/appointment-new-symbolic.js';
import AppointmentSoonSymbolic from '../icons/appointment-soon-symbolic.js';
import AudioCardSymbolic from '../icons/audio-card-symbolic.js';
import AudioHeadphonesSymbolic from '../icons/audio-headphones-symbolic.js';
import AudioHeadsetSymbolic from '../icons/audio-headset-symbolic.js';
import AudioInputMicrophoneSymbolic from '../icons/audio-input-microphone-symbolic.js';
import AudioSpeakersSymbolic from '../icons/audio-speakers-symbolic.js';
import AudioVolumeHighSymbolic from '../icons/audio-volume-high-symbolic.js';
import AudioVolumeLowSymbolic from '../icons/audio-volume-low-symbolic.js';
import AudioVolumeMediumSymbolic from '../icons/audio-volume-medium-symbolic.js';
import AudioVolumeMutedSymbolic from '../icons/audio-volume-muted-symbolic.js';
import AudioVolumeOveramplifiedSymbolic from '../icons/audio-volume-overamplified-symbolic.js';
import AudioXGenericSymbolic from '../icons/audio-x-generic-symbolic.js';
import AuthFingerprintSymbolic from '../icons/auth-fingerprint-symbolic.js';
import AuthSimLockedSymbolic from '../icons/auth-sim-locked-symbolic.js';
import AuthSimMissingSymbolic from '../icons/auth-sim-missing-symbolic.js';
import AuthSimSymbolic from '../icons/auth-sim-symbolic.js';
import AuthSmartcardSymbolic from '../icons/auth-smartcard-symbolic.js';
import AvatarDefaultSymbolic from '../icons/avatar-default-symbolic.js';
import BatteryCautionChargingSymbolic from '../icons/battery-caution-charging-symbolic.js';
import BatteryCautionSymbolic from '../icons/battery-caution-symbolic.js';
import BatteryEmptyChargingSymbolic from '../icons/battery-empty-charging-symbolic.js';
import BatteryEmptySymbolic from '../icons/battery-empty-symbolic.js';
import BatteryFullChargedSymbolic from '../icons/battery-full-charged-symbolic.js';
import BatteryFullChargingSymbolic from '../icons/battery-full-charging-symbolic.js';
import BatteryFullSymbolic from '../icons/battery-full-symbolic.js';
import BatteryGoodChargingSymbolic from '../icons/battery-good-charging-symbolic.js';
import BatteryGoodSymbolic from '../icons/battery-good-symbolic.js';
import BatteryLevel0ChargingSymbolic from '../icons/battery-level-0-charging-symbolic.js';
import BatteryLevel0Symbolic from '../icons/battery-level-0-symbolic.js';
import BatteryLevel100ChargedSymbolic from '../icons/battery-level-100-charged-symbolic.js';
import BatteryLevel100Symbolic from '../icons/battery-level-100-symbolic.js';
import BatteryLevel10ChargingSymbolic from '../icons/battery-level-10-charging-symbolic.js';
import BatteryLevel10Symbolic from '../icons/battery-level-10-symbolic.js';
import BatteryLevel20ChargingSymbolic from '../icons/battery-level-20-charging-symbolic.js';
import BatteryLevel20Symbolic from '../icons/battery-level-20-symbolic.js';
import BatteryLevel30ChargingSymbolic from '../icons/battery-level-30-charging-symbolic.js';
import BatteryLevel30Symbolic from '../icons/battery-level-30-symbolic.js';
import BatteryLevel40ChargingSymbolic from '../icons/battery-level-40-charging-symbolic.js';
import BatteryLevel40Symbolic from '../icons/battery-level-40-symbolic.js';
import BatteryLevel50ChargingSymbolic from '../icons/battery-level-50-charging-symbolic.js';
import BatteryLevel50Symbolic from '../icons/battery-level-50-symbolic.js';
import BatteryLevel60ChargingSymbolic from '../icons/battery-level-60-charging-symbolic.js';
import BatteryLevel60Symbolic from '../icons/battery-level-60-symbolic.js';
import BatteryLevel70ChargingSymbolic from '../icons/battery-level-70-charging-symbolic.js';
import BatteryLevel70Symbolic from '../icons/battery-level-70-symbolic.js';
import BatteryLevel80ChargingSymbolic from '../icons/battery-level-80-charging-symbolic.js';
import BatteryLevel80Symbolic from '../icons/battery-level-80-symbolic.js';
import BatteryLevel90ChargingSymbolic from '../icons/battery-level-90-charging-symbolic.js';
import BatteryLevel90Symbolic from '../icons/battery-level-90-symbolic.js';
import BatteryLowChargingSymbolic from '../icons/battery-low-charging-symbolic.js';
import BatteryLowSymbolic from '../icons/battery-low-symbolic.js';
import BatteryMissingSymbolic from '../icons/battery-missing-symbolic.js';
import BatterySymbolic from '../icons/battery-symbolic.js';
import BluetoothActiveSymbolic from '../icons/bluetooth-active-symbolic.js';
import BluetoothDisabledSymbolic from '../icons/bluetooth-disabled-symbolic.js';
import BluetoothDisconnectedSymbolic from '../icons/bluetooth-disconnected-symbolic.js';
import BluetoothHardwareDisabledSymbolic from '../icons/bluetooth-hardware-disabled-symbolic.js';
import BluetoothSymbolic from '../icons/bluetooth-symbolic.js';
import BookmarkNewSymbolic from '../icons/bookmark-new-symbolic.js';
import CallIncomingSymbolic from '../icons/call-incoming-symbolic.js';
import CallMissedSymbolic from '../icons/call-missed-symbolic.js';
import CallOutgoingSymbolic from '../icons/call-outgoing-symbolic.js';
import CallStartSymbolic from '../icons/call-start-symbolic.js';
import CallStopSymbolic from '../icons/call-stop-symbolic.js';
import CameraDisabledSymbolic from '../icons/camera-disabled-symbolic.js';
import CameraHardwareDisabledSymbolic from '../icons/camera-hardware-disabled-symbolic.js';
import CameraPhotoSymbolic from '../icons/camera-photo-symbolic.js';
import CameraSwitchSymbolic from '../icons/camera-switch-symbolic.js';
import CameraVideoSymbolic from '../icons/camera-video-symbolic.js';
import CameraWebSymbolic from '../icons/camera-web-symbolic.js';
import CapsLockSymbolic from '../icons/caps-lock-symbolic.js';
import ChangesAllowSymbolic from '../icons/changes-allow-symbolic.js';
import ChangesPreventSymbolic from '../icons/changes-prevent-symbolic.js';
import ChannelInsecureSymbolic from '../icons/channel-insecure-symbolic.js';
import ChannelSecureSymbolic from '../icons/channel-secure-symbolic.js';
import ChatMessageNewSymbolic from '../icons/chat-message-new-symbolic.js';
import CheckboxCheckedSymbolic from '../icons/checkbox-checked-symbolic.js';
import CheckboxMixedSymbolic from '../icons/checkbox-mixed-symbolic.js';
import CheckboxSymbolic from '../icons/checkbox-symbolic.js';
import ColorimeterColorhugSymbolic from '../icons/colorimeter-colorhug-symbolic.js';
import ColorSelectSymbolic from '../icons/color-select-symbolic.js';
import ComputerAppleIpadSymbolic from '../icons/computer-apple-ipad-symbolic.js';
import ComputerFailSymbolic from '../icons/computer-fail-symbolic.js';
import ComputerSymbolic from '../icons/computer-symbolic.js';
import ContactNewSymbolic from '../icons/contact-new-symbolic.js';
import ContentLoadingSymbolic from '../icons/content-loading-symbolic.js';
import DaytimeSunriseSymbolic from '../icons/daytime-sunrise-symbolic.js';
import DaytimeSunsetSymbolic from '../icons/daytime-sunset-symbolic.js';
import DialogErrorSymbolic from '../icons/dialog-error-symbolic.js';
import DialogInformationSymbolic from '../icons/dialog-information-symbolic.js';
import DialogPasswordSymbolic from '../icons/dialog-password-symbolic.js';
import DialogQuestionSymbolic from '../icons/dialog-question-symbolic.js';
import DialogWarningSymbolic from '../icons/dialog-warning-symbolic.js';
import DisplayBrightnessSymbolic from '../icons/display-brightness-symbolic.js';
import DisplayProjectorSymbolic from '../icons/display-projector-symbolic.js';
import DocumentEditSymbolic from '../icons/document-edit-symbolic.js';
import DocumentNewSymbolic from '../icons/document-new-symbolic.js';
import DocumentOpenRecentSymbolic from '../icons/document-open-recent-symbolic.js';
import DocumentOpenSymbolic from '../icons/document-open-symbolic.js';
import DocumentPageSetupSymbolic from '../icons/document-page-setup-symbolic.js';
import DocumentPrintPreviewSymbolic from '../icons/document-print-preview-symbolic.js';
import DocumentPrintSymbolic from '../icons/document-print-symbolic.js';
import DocumentPropertiesSymbolic from '../icons/document-properties-symbolic.js';
import DocumentRevertSymbolicRtl from '../icons/document-revert-symbolic-rtl.js';
import DocumentRevertSymbolic from '../icons/document-revert-symbolic.js';
import DocumentSaveAsSymbolic from '../icons/document-save-as-symbolic.js';
import DocumentSaveSymbolic from '../icons/document-save-symbolic.js';
import DocumentSendSymbolic from '../icons/document-send-symbolic.js';
import DriveHarddiskIeee1394Symbolic from '../icons/drive-harddisk-ieee1394-symbolic.js';
import DriveHarddiskSolidstateSymbolic from '../icons/drive-harddisk-solidstate-symbolic.js';
import DriveHarddiskSymbolic from '../icons/drive-harddisk-symbolic.js';
import DriveHarddiskSystemSymbolic from '../icons/drive-harddisk-system-symbolic.js';
import DriveHarddiskUsbSymbolic from '../icons/drive-harddisk-usb-symbolic.js';
import DriveMultidiskSymbolic from '../icons/drive-multidisk-symbolic.js';
import DriveOpticalSymbolic from '../icons/drive-optical-symbolic.js';
import DriveRemovableMediaSymbolic from '../icons/drive-removable-media-symbolic.js';
import EditClearAllSymbolic from '../icons/edit-clear-all-symbolic.js';
import EditClearSymbolicRtl from '../icons/edit-clear-symbolic-rtl.js';
import EditClearSymbolic from '../icons/edit-clear-symbolic.js';
import EditCopySymbolic from '../icons/edit-copy-symbolic.js';
import EditCutSymbolic from '../icons/edit-cut-symbolic.js';
import EditDeleteSymbolic from '../icons/edit-delete-symbolic.js';
import EditFindReplaceSymbolic from '../icons/edit-find-replace-symbolic.js';
import EditFindSymbolic from '../icons/edit-find-symbolic.js';
import EditPasteSymbolic from '../icons/edit-paste-symbolic.js';
import EditRedoSymbolic from '../icons/edit-redo-symbolic.js';
import EditSelectAllSymbolic from '../icons/edit-select-all-symbolic.js';
import EditSelectSymbolic from '../icons/edit-select-symbolic.js';
import EditUndoSymbolic from '../icons/edit-undo-symbolic.js';
import EmblemDefaultSymbolic from '../icons/emblem-default-symbolic.js';
import EmblemDocumentsSymbolic from '../icons/emblem-documents-symbolic.js';
import EmblemFavoriteSymbolic from '../icons/emblem-favorite-symbolic.js';
import EmblemImportantSymbolic from '../icons/emblem-important-symbolic.js';
import EmblemMusicSymbolic from '../icons/emblem-music-symbolic.js';
import EmblemOkSymbolic from '../icons/emblem-ok-symbolic.js';
import EmblemPhotosSymbolic from '../icons/emblem-photos-symbolic.js';
import EmblemSharedSymbolic from '../icons/emblem-shared-symbolic.js';
import EmblemSynchronizingSymbolic from '../icons/emblem-synchronizing-symbolic.js';
import EmblemSystemSymbolic from '../icons/emblem-system-symbolic.js';
import EmblemVideosSymbolic from '../icons/emblem-videos-symbolic.js';
import EmojiActivitiesSymbolic from '../icons/emoji-activities-symbolic.js';
import EmojiBodySymbolic from '../icons/emoji-body-symbolic.js';
import EmojiFlagsSymbolic from '../icons/emoji-flags-symbolic.js';
import EmojiFoodSymbolic from '../icons/emoji-food-symbolic.js';
import EmojiNatureSymbolic from '../icons/emoji-nature-symbolic.js';
import EmojiObjectsSymbolic from '../icons/emoji-objects-symbolic.js';
import EmojiPeopleSymbolic from '../icons/emoji-people-symbolic.js';
import EmojiRecentSymbolic from '../icons/emoji-recent-symbolic.js';
import EmojiSymbolsSymbolic from '../icons/emoji-symbols-symbolic.js';
import EmojiTravelSymbolic from '../icons/emoji-travel-symbolic.js';
import EmoteLoveSymbolic from '../icons/emote-love-symbolic.js';
import ErrorCorrectSymbolic from '../icons/error-correct-symbolic.js';
import EyeNotLookingSymbolic from '../icons/eye-not-looking-symbolic.js';
import EyeOpenNegativeFilledSymbolic from '../icons/eye-open-negative-filled-symbolic.js';
import FaceAngelSymbolic from '../icons/face-angel-symbolic.js';
import FaceAngrySymbolic from '../icons/face-angry-symbolic.js';
import FaceConfusedSymbolic from '../icons/face-confused-symbolic.js';
import FaceCoolSymbolic from '../icons/face-cool-symbolic.js';
import FaceCryingSymbolic from '../icons/face-crying-symbolic.js';
import FaceDevilishSymbolic from '../icons/face-devilish-symbolic.js';
import FaceEmbarrassedSymbolic from '../icons/face-embarrassed-symbolic.js';
import FaceGlassesSymbolic from '../icons/face-glasses-symbolic.js';
import FaceKissSymbolic from '../icons/face-kiss-symbolic.js';
import FaceLaughSymbolic from '../icons/face-laugh-symbolic.js';
import FaceMonkeySymbolic from '../icons/face-monkey-symbolic.js';
import FacePlainSymbolic from '../icons/face-plain-symbolic.js';
import FaceRaspberrySymbolic from '../icons/face-raspberry-symbolic.js';
import FaceSadSymbolic from '../icons/face-sad-symbolic.js';
import FaceShutmouthSymbolic from '../icons/face-shutmouth-symbolic.js';
import FaceSickSymbolic from '../icons/face-sick-symbolic.js';
import FaceSmileBigSymbolic from '../icons/face-smile-big-symbolic.js';
import FaceSmileSymbolic from '../icons/face-smile-symbolic.js';
import FaceSmirkSymbolic from '../icons/face-smirk-symbolic.js';
import FaceSurpriseSymbolic from '../icons/face-surprise-symbolic.js';
import FaceTiredSymbolic from '../icons/face-tired-symbolic.js';
import FaceUncertainSymbolic from '../icons/face-uncertain-symbolic.js';
import FaceWinkSymbolic from '../icons/face-wink-symbolic.js';
import FaceWorriedSymbolic from '../icons/face-worried-symbolic.js';
import FaceYawnSymbolic from '../icons/face-yawn-symbolic.js';
import FindLocationSymbolic from '../icons/find-location-symbolic.js';
import FocusLegacySystraySymbolic from '../icons/focus-legacy-systray-symbolic.js';
import FocusTopBarSymbolic from '../icons/focus-top-bar-symbolic.js';
import FocusWindowsSymbolic from '../icons/focus-windows-symbolic.js';
import FolderDocumentsSymbolic from '../icons/folder-documents-symbolic.js';
import FolderDownloadSymbolic from '../icons/folder-download-symbolic.js';
import FolderDragAcceptSymbolic from '../icons/folder-drag-accept-symbolic.js';
import FolderMusicSymbolic from '../icons/folder-music-symbolic.js';
import FolderNewSymbolic from '../icons/folder-new-symbolic.js';
import FolderOpenSymbolic from '../icons/folder-open-symbolic.js';
import FolderPicturesSymbolic from '../icons/folder-pictures-symbolic.js';
import FolderPublicshareSymbolic from '../icons/folder-publicshare-symbolic.js';
import FolderRemoteSymbolic from '../icons/folder-remote-symbolic.js';
import FolderSavedSearchSymbolic from '../icons/folder-saved-search-symbolic.js';
import FolderSymbolic from '../icons/folder-symbolic.js';
import FolderTemplatesSymbolic from '../icons/folder-templates-symbolic.js';
import FolderVideosSymbolic from '../icons/folder-videos-symbolic.js';
import FolderVisitingSymbolic from '../icons/folder-visiting-symbolic.js';
import FontSelectSymbolic from '../icons/font-select-symbolic.js';
import FontXGenericSymbolic from '../icons/font-x-generic-symbolic.js';
import FormatIndentLessSymbolic from '../icons/format-indent-less-symbolic.js';
import FormatIndentMoreSymbolic from '../icons/format-indent-more-symbolic.js';
import FormatJustifyCenterSymbolic from '../icons/format-justify-center-symbolic.js';
import FormatJustifyFillSymbolic from '../icons/format-justify-fill-symbolic.js';
import FormatJustifyLeftSymbolic from '../icons/format-justify-left-symbolic.js';
import FormatJustifyRightSymbolic from '../icons/format-justify-right-symbolic.js';
import FormatTextBoldSymbolic from '../icons/format-text-bold-symbolic.js';
import FormatTextDirectionSymbolicRtl from '../icons/format-text-direction-symbolic-rtl.js';
import FormatTextDirectionSymbolic from '../icons/format-text-direction-symbolic.js';
import FormatTextItalicSymbolic from '../icons/format-text-italic-symbolic.js';
import FormatTextStrikethroughSymbolic from '../icons/format-text-strikethrough-symbolic.js';
import FormatTextUnderlineSymbolic from '../icons/format-text-underline-symbolic.js';
import GnomePowerManagerSymbolic from '../icons/gnome-power-manager-symbolic.js';
import GoaPanelSymbolic from '../icons/goa-panel-symbolic.js';
import GoBottomSymbolic from '../icons/go-bottom-symbolic.js';
import GoDownSymbolic from '../icons/go-down-symbolic.js';
import GoFirstSymbolic from '../icons/go-first-symbolic.js';
import GoHomeSymbolic from '../icons/go-home-symbolic.js';
import GoJumpSymbolicRtl from '../icons/go-jump-symbolic-rtl.js';
import GoJumpSymbolic from '../icons/go-jump-symbolic.js';
import GoLastSymbolic from '../icons/go-last-symbolic.js';
import GoNextSymbolic from '../icons/go-next-symbolic.js';
import GoPreviousSymbolic from '../icons/go-previous-symbolic.js';
import GoTopSymbolic from '../icons/go-top-symbolic.js';
import GoUpSymbolic from '../icons/go-up-symbolic.js';
import HelpAboutSymbolic from '../icons/help-about-symbolic.js';
import HelpBrowserSymbolic from '../icons/help-browser-symbolic.js';
import HelpContentsSymbolic from '../icons/help-contents-symbolic.js';
import HelpFaqSymbolic from '../icons/help-faq-symbolic.js';
import ImageLoadingSymbolic from '../icons/image-loading-symbolic.js';
import ImageXGenericSymbolic from '../icons/image-x-generic-symbolic.js';
import InodeDirectorySymbolic from '../icons/inode-directory-symbolic.js';
import InputDialpadSymbolic from '../icons/input-dialpad-symbolic.js';
import InputGamingSymbolic from '../icons/input-gaming-symbolic.js';
import InputKeyboardSymbolic from '../icons/input-keyboard-symbolic.js';
import InputMouseSymbolic from '../icons/input-mouse-symbolic.js';
import InputTabletSymbolic from '../icons/input-tablet-symbolic.js';
import InputTouchpadSymbolic from '../icons/input-touchpad-symbolic.js';
import InsertImageSymbolic from '../icons/insert-image-symbolic.js';
import InsertLinkSymbolic from '../icons/insert-link-symbolic.js';
import InsertObjectSymbolic from '../icons/insert-object-symbolic.js';
import InsertTextSymbolic from '../icons/insert-text-symbolic.js';
import KeyboardBrightnessSymbolic from '../icons/keyboard-brightness-symbolic.js';
import ListAddSymbolic from '../icons/list-add-symbolic.js';
import ListDragHandleSymbolic from '../icons/list-drag-handle-symbolic.js';
import ListRemoveAllSymbolic from '../icons/list-remove-all-symbolic.js';
import ListRemoveSymbolic from '../icons/list-remove-symbolic.js';
import LocationServicesActiveSymbolic from '../icons/location-services-active-symbolic.js';
import LocationServicesDisabledSymbolic from '../icons/location-services-disabled-symbolic.js';
import MailAttachmentSymbolic from '../icons/mail-attachment-symbolic.js';
import MailForwardSymbolic from '../icons/mail-forward-symbolic.js';
import MailMarkImportantSymbolic from '../icons/mail-mark-important-symbolic.js';
import MailMarkJunkSymbolic from '../icons/mail-mark-junk-symbolic.js';
import MailMarkNotjunkSymbolic from '../icons/mail-mark-notjunk-symbolic.js';
import MailMessageNewSymbolic from '../icons/mail-message-new-symbolic.js';
import MailReadSymbolic from '../icons/mail-read-symbolic.js';
import MailRepliedSymbolic from '../icons/mail-replied-symbolic.js';
import MailReplyAllSymbolic from '../icons/mail-reply-all-symbolic.js';
import MailReplySenderSymbolic from '../icons/mail-reply-sender-symbolic.js';
import MailSendReceiveSymbolic from '../icons/mail-send-receive-symbolic.js';
import MailSendSymbolic from '../icons/mail-send-symbolic.js';
import MailUnreadSymbolic from '../icons/mail-unread-symbolic.js';
import MarkLocationSymbolic from '../icons/mark-location-symbolic.js';
import MediaEjectSymbolic from '../icons/media-eject-symbolic.js';
import MediaFlashSymbolic from '../icons/media-flash-symbolic.js';
import MediaFloppySymbolic from '../icons/media-floppy-symbolic.js';
import MediaOpticalBdSymbolic from '../icons/media-optical-bd-symbolic.js';
import MediaOpticalCdAudioSymbolic from '../icons/media-optical-cd-audio-symbolic.js';
import MediaOpticalDvdSymbolic from '../icons/media-optical-dvd-symbolic.js';
import MediaOpticalSymbolic from '../icons/media-optical-symbolic.js';
import MediaPlaybackPauseSymbolic from '../icons/media-playback-pause-symbolic.js';
import MediaPlaybackStartSymbolicRtl from '../icons/media-playback-start-symbolic-rtl.js';
import MediaPlaybackStartSymbolic from '../icons/media-playback-start-symbolic.js';
import MediaPlaybackStopSymbolic from '../icons/media-playback-stop-symbolic.js';
import MediaPlaylistConsecutiveSymbolic from '../icons/media-playlist-consecutive-symbolic.js';
import MediaPlaylistRepeatSongSymbolic from '../icons/media-playlist-repeat-song-symbolic.js';
import MediaPlaylistRepeatSymbolic from '../icons/media-playlist-repeat-symbolic.js';
import MediaPlaylistShuffleSymbolic from '../icons/media-playlist-shuffle-symbolic.js';
import MediaRecordSymbolic from '../icons/media-record-symbolic.js';
import MediaRemovableSymbolic from '../icons/media-removable-symbolic.js';
import MediaSeekBackwardSymbolic from '../icons/media-seek-backward-symbolic.js';
import MediaSeekForwardSymbolic from '../icons/media-seek-forward-symbolic.js';
import MediaSkipBackwardSymbolic from '../icons/media-skip-backward-symbolic.js';
import MediaSkipForwardSymbolic from '../icons/media-skip-forward-symbolic.js';
import MediaTapeSymbolic from '../icons/media-tape-symbolic.js';
import MediaViewSubtitlesSymbolic from '../icons/media-view-subtitles-symbolic.js';
import MediaZipSymbolic from '../icons/media-zip-symbolic.js';
import MicrophoneDisabledSymbolic from '../icons/microphone-disabled-symbolic.js';
import MicrophoneHardwareDisabledSymbolic from '../icons/microphone-hardware-disabled-symbolic.js';
import MicrophoneSensitivityHighSymbolic from '../icons/microphone-sensitivity-high-symbolic.js';
import MicrophoneSensitivityLowSymbolic from '../icons/microphone-sensitivity-low-symbolic.js';
import MicrophoneSensitivityMediumSymbolic from '../icons/microphone-sensitivity-medium-symbolic.js';
import MicrophoneSensitivityMutedSymbolic from '../icons/microphone-sensitivity-muted-symbolic.js';
import ModemSymbolic from '../icons/modem-symbolic.js';
import MultimediaPlayerAppleIpodTouchSymbolic from '../icons/multimedia-player-apple-ipod-touch-symbolic.js';
import MultimediaPlayerSymbolic from '../icons/multimedia-player-symbolic.js';
import MultimediaVolumeControlSymbolic from '../icons/multimedia-volume-control-symbolic.js';
import NetworkCellular2gSymbolic from '../icons/network-cellular-2g-symbolic.js';
import NetworkCellular3gSymbolic from '../icons/network-cellular-3g-symbolic.js';
import NetworkCellular4gSymbolic from '../icons/network-cellular-4g-symbolic.js';
import NetworkCellularAcquiringSymbolic from '../icons/network-cellular-acquiring-symbolic.js';
import NetworkCellularConnectedSymbolic from '../icons/network-cellular-connected-symbolic.js';
import NetworkCellularDisabledSymbolic from '../icons/network-cellular-disabled-symbolic.js';
import NetworkCellularEdgeSymbolic from '../icons/network-cellular-edge-symbolic.js';
import NetworkCellularGprsSymbolic from '../icons/network-cellular-gprs-symbolic.js';
import NetworkCellularHardwareDisabledSymbolic from '../icons/network-cellular-hardware-disabled-symbolic.js';
import NetworkCellularHspaSymbolic from '../icons/network-cellular-hspa-symbolic.js';
import NetworkCellularNoRouteSymbolic from '../icons/network-cellular-no-route-symbolic.js';
import NetworkCellularOfflineSymbolic from '../icons/network-cellular-offline-symbolic.js';
import NetworkCellularSignalExcellentSymbolic from '../icons/network-cellular-signal-excellent-symbolic.js';
import NetworkCellularSignalGoodSymbolic from '../icons/network-cellular-signal-good-symbolic.js';
import NetworkCellularSignalNoneSymbolic from '../icons/network-cellular-signal-none-symbolic.js';
import NetworkCellularSignalOkSymbolic from '../icons/network-cellular-signal-ok-symbolic.js';
import NetworkCellularSignalWeakSymbolic from '../icons/network-cellular-signal-weak-symbolic.js';
import NetworkCellularSymbolic from '../icons/network-cellular-symbolic.js';
import NetworkErrorSymbolic from '../icons/network-error-symbolic.js';
import NetworkIdleSymbolic from '../icons/network-idle-symbolic.js';
import NetworkNoRouteSymbolic from '../icons/network-no-route-symbolic.js';
import NetworkOfflineSymbolic from '../icons/network-offline-symbolic.js';
import NetworkReceiveSymbolic from '../icons/network-receive-symbolic.js';
import NetworkServerSymbolic from '../icons/network-server-symbolic.js';
import NetworkTransmitReceiveSymbolic from '../icons/network-transmit-receive-symbolic.js';
import NetworkTransmitSymbolic from '../icons/network-transmit-symbolic.js';
import NetworkVpnAcquiringSymbolic from '../icons/network-vpn-acquiring-symbolic.js';
import NetworkVpnNoRouteSymbolic from '../icons/network-vpn-no-route-symbolic.js';
import NetworkVpnSymbolic from '../icons/network-vpn-symbolic.js';
import NetworkWiredAcquiringSymbolic from '../icons/network-wired-acquiring-symbolic.js';
import NetworkWiredDisconnectedSymbolic from '../icons/network-wired-disconnected-symbolic.js';
import NetworkWiredNoRouteSymbolic from '../icons/network-wired-no-route-symbolic.js';
import NetworkWiredOfflineSymbolic from '../icons/network-wired-offline-symbolic.js';
import NetworkWiredSymbolic from '../icons/network-wired-symbolic.js';
import NetworkWirelessAcquiringSymbolic from '../icons/network-wireless-acquiring-symbolic.js';
import NetworkWirelessConnectedSymbolic from '../icons/network-wireless-connected-symbolic.js';
import NetworkWirelessDisabledSymbolic from '../icons/network-wireless-disabled-symbolic.js';
import NetworkWirelessEncryptedSymbolic from '../icons/network-wireless-encrypted-symbolic.js';
import NetworkWirelessHardwareDisabledSymbolic from '../icons/network-wireless-hardware-disabled-symbolic.js';
import NetworkWirelessHotspotSymbolic from '../icons/network-wireless-hotspot-symbolic.js';
import NetworkWirelessNoRouteSymbolic from '../icons/network-wireless-no-route-symbolic.js';
import NetworkWirelessOfflineSymbolic from '../icons/network-wireless-offline-symbolic.js';
import NetworkWirelessSignalExcellentSymbolic from '../icons/network-wireless-signal-excellent-symbolic.js';
import NetworkWirelessSignalGoodSymbolic from '../icons/network-wireless-signal-good-symbolic.js';
import NetworkWirelessSignalNoneSymbolic from '../icons/network-wireless-signal-none-symbolic.js';
import NetworkWirelessSignalOkSymbolic from '../icons/network-wireless-signal-ok-symbolic.js';
import NetworkWirelessSignalWeakSymbolic from '../icons/network-wireless-signal-weak-symbolic.js';
import NetworkWirelessSymbolic from '../icons/network-wireless-symbolic.js';
import NetworkWorkgroupSymbolic from '../icons/network-workgroup-symbolic.js';
import NightLightSymbolic from '../icons/night-light-symbolic.js';
import NonStarredSymbolic from '../icons/non-starred-symbolic.js';
import NotificationsDisabledSymbolic from '../icons/notifications-disabled-symbolic.js';
import ObjectFlipHorizontalSymbolic from '../icons/object-flip-horizontal-symbolic.js';
import ObjectFlipVerticalSymbolic from '../icons/object-flip-vertical-symbolic.js';
import ObjectRotateLeftSymbolic from '../icons/object-rotate-left-symbolic.js';
import ObjectRotateRightSymbolic from '../icons/object-rotate-right-symbolic.js';
import ObjectSelectSymbolic from '../icons/object-select-symbolic.js';
import OpenMenuSymbolic from '../icons/open-menu-symbolic.js';
import OrientationLandscapeInverseSymbolic from '../icons/orientation-landscape-inverse-symbolic.js';
import OrientationLandscapeSymbolic from '../icons/orientation-landscape-symbolic.js';
import OrientationPortraitInverseSymbolic from '../icons/orientation-portrait-inverse-symbolic.js';
import OrientationPortraitLeftSymbolic from '../icons/orientation-portrait-left-symbolic.js';
import OrientationPortraitRightSymbolic from '../icons/orientation-portrait-right-symbolic.js';
import OrientationPortraitSymbolic from '../icons/orientation-portrait-symbolic.js';
import PackageXGenericSymbolic from '../icons/package-x-generic-symbolic.js';
import PanDownSymbolic from '../icons/pan-down-symbolic.js';
import PanEndSymbolicRtl from '../icons/pan-end-symbolic-rtl.js';
import PanEndSymbolic from '../icons/pan-end-symbolic.js';
import PanStartSymbolicRtl from '../icons/pan-start-symbolic-rtl.js';
import PanStartSymbolic from '../icons/pan-start-symbolic.js';
import PanUpSymbolic from '../icons/pan-up-symbolic.js';
import PdaSymbolic from '../icons/pda-symbolic.js';
import PhoneAppleIphoneSymbolic from '../icons/phone-apple-iphone-symbolic.js';
import PhoneOldSymbolic from '../icons/phone-old-symbolic.js';
import PhoneSymbolic from '../icons/phone-symbolic.js';
import PowerProfileBalancedSymbolic from '../icons/power-profile-balanced-symbolic.js';
import PowerProfilePerformanceSymbolic from '../icons/power-profile-performance-symbolic.js';
import PowerProfilePowerSaverSymbolic from '../icons/power-profile-power-saver-symbolic.js';
import PreferencesColorSymbolic from '../icons/preferences-color-symbolic.js';
import PreferencesDesktopAccessibilitySymbolic from '../icons/preferences-desktop-accessibility-symbolic.js';
import PreferencesDesktopAppsSymbolic from '../icons/preferences-desktop-apps-symbolic.js';
import PreferencesDesktopDisplaySymbolic from '../icons/preferences-desktop-display-symbolic.js';
import PreferencesDesktopFontSymbolic from '../icons/preferences-desktop-font-symbolic.js';
import PreferencesDesktopKeyboardShortcutsSymbolic from '../icons/preferences-desktop-keyboard-shortcuts-symbolic.js';
import PreferencesDesktopKeyboardSymbolic from '../icons/preferences-desktop-keyboard-symbolic.js';
import PreferencesDesktopLocaleSymbolic from '../icons/preferences-desktop-locale-symbolic.js';
import PreferencesDesktopRemoteDesktopSymbolic from '../icons/preferences-desktop-remote-desktop-symbolic.js';
import PreferencesDesktopScreensaverSymbolic from '../icons/preferences-desktop-screensaver-symbolic.js';
import PreferencesDesktopWallpaperSymbolic from '../icons/preferences-desktop-wallpaper-symbolic.js';
import PreferencesOtherSymbolic from '../icons/preferences-other-symbolic.js';
import PreferencesSystemDetailsSymbolic from '../icons/preferences-system-details-symbolic.js';
import PreferencesSystemDevicesSymbolic from '../icons/preferences-system-devices-symbolic.js';
import PreferencesSystemNetworkProxySymbolic from '../icons/preferences-system-network-proxy-symbolic.js';
import PreferencesSystemNetworkSymbolic from '../icons/preferences-system-network-symbolic.js';
import PreferencesSystemNotificationsSymbolic from '../icons/preferences-system-notifications-symbolic.js';
import PreferencesSystemParentalControlsSymbolic from '../icons/preferences-system-parental-controls-symbolic.js';
import PreferencesSystemPrivacySymbolic from '../icons/preferences-system-privacy-symbolic.js';
import PreferencesSystemSearchSymbolic from '../icons/preferences-system-search-symbolic.js';
import PreferencesSystemSharingSymbolic from '../icons/preferences-system-sharing-symbolic.js';
import PreferencesSystemSymbolic from '../icons/preferences-system-symbolic.js';
import PreferencesSystemTimeSymbolic from '../icons/preferences-system-time-symbolic.js';
import PrinterErrorSymbolic from '../icons/printer-error-symbolic.js';
import PrinterNetworkSymbolic from '../icons/printer-network-symbolic.js';
import PrinterPrintingSymbolic from '../icons/printer-printing-symbolic.js';
import PrinterSymbolic from '../icons/printer-symbolic.js';
import PrinterWarningSymbolic from '../icons/printer-warning-symbolic.js';
import ProcessStopSymbolic from '../icons/process-stop-symbolic.js';
import ProcessWorkingSymbolic from '../icons/process-working-symbolic.js';
import RadioCheckedSymbolic from '../icons/radio-checked-symbolic.js';
import RadioMixedSymbolic from '../icons/radio-mixed-symbolic.js';
import RadioSymbolic from '../icons/radio-symbolic.js';
import RotationAllowedSymbolic from '../icons/rotation-allowed-symbolic.js';
import RotationLockedSymbolic from '../icons/rotation-locked-symbolic.js';
import ScannerSymbolic from '../icons/scanner-symbolic.js';
import ScreenSharedSymbolic from '../icons/screen-shared-symbolic.js';
import SecurityHighSymbolic from '../icons/security-high-symbolic.js';
import SecurityLowSymbolic from '../icons/security-low-symbolic.js';
import SecurityMediumSymbolic from '../icons/security-medium-symbolic.js';
import SelectionEndSymbolic from '../icons/selection-end-symbolic.js';
import SelectionStartSymbolic from '../icons/selection-start-symbolic.js';
import SemiStarredSymbolicRtl from '../icons/semi-starred-symbolic-rtl.js';
import SemiStarredSymbolic from '../icons/semi-starred-symbolic.js';
import SendToSymbolic from '../icons/send-to-symbolic.js';
import SidebarHideSymbolic from '../icons/sidebar-hide-symbolic.js';
import SidebarShowSymbolic from '../icons/sidebar-show-symbolic.js';
import SoftwareUpdateAvailableSymbolic from '../icons/software-update-available-symbolic.js';
import SoftwareUpdateUrgentSymbolic from '../icons/software-update-urgent-symbolic.js';
import StarNewSymbolic from '../icons/star-new-symbolic.js';
import StarredSymbolic from '../icons/starred-symbolic.js';
import StartHereSymbolic from '../icons/start-here-symbolic.js';
import SwitchOff from '../icons/switch-off-symbolic.js';
import SwitchOn from '../icons/switch-on-symbolic.js';
import SystemFileManagerSymbolic from '../icons/system-file-manager-symbolic.js';
import SystemHelpSymbolic from '../icons/system-help-symbolic.js';
import SystemLockScreenSymbolic from '../icons/system-lock-screen-symbolic.js';
import SystemLogOutSymbolic from '../icons/system-log-out-symbolic.js';
import SystemRebootSymbolic from '../icons/system-reboot-symbolic.js';
import SystemRunSymbolic from '../icons/system-run-symbolic.js';
import SystemSearchSymbolic from '../icons/system-search-symbolic.js';
import SystemShutdownSymbolic from '../icons/system-shutdown-symbolic.js';
import SystemSoftwareInstallSymbolic from '../icons/system-software-install-symbolic.js';
import SystemSwitchUserSymbolic from '../icons/system-switch-user-symbolic.js';
import SystemUsersSymbolic from '../icons/system-users-symbolic.js';
import TabNewSymbolic from '../icons/tab-new-symbolic.js';
import TaskDueSymbolic from '../icons/task-due-symbolic.js';
import TaskPastDueSymbolic from '../icons/task-past-due-symbolic.js';
import TextEditorSymbolic from '../icons/text-editor-symbolic.js';
import TextXGenericSymbolic from '../icons/text-x-generic-symbolic.js';
import ThunderboltAcquiringSymbolic from '../icons/thunderbolt-acquiring-symbolic.js';
import ThunderboltSymbolic from '../icons/thunderbolt-symbolic.js';
import ToolsCheckSpellingSymbolic from '../icons/tools-check-spelling-symbolic.js';
import TouchDisabledSymbolic from '../icons/touch-disabled-symbolic.js';
import TouchpadDisabledSymbolic from '../icons/touchpad-disabled-symbolic.js';
import TvSymbolic from '../icons/tv-symbolic.js';
import UninterruptiblePowerSupplySymbolic from '../icons/uninterruptible-power-supply-symbolic.js';
import UserAvailableSymbolic from '../icons/user-available-symbolic.js';
import UserAwaySymbolic from '../icons/user-away-symbolic.js';
import UserBookmarksSymbolic from '../icons/user-bookmarks-symbolic.js';
import UserBusySymbolic from '../icons/user-busy-symbolic.js';
import UserDesktopSymbolic from '../icons/user-desktop-symbolic.js';
import UserHomeSymbolic from '../icons/user-home-symbolic.js';
import UserIdleSymbolic from '../icons/user-idle-symbolic.js';
import UserInfoSymbolic from '../icons/user-info-symbolic.js';
import UserInvisibleSymbolic from '../icons/user-invisible-symbolic.js';
import UserNotTrackedSymbolic from '../icons/user-not-tracked-symbolic.js';
import UserOfflineSymbolic from '../icons/user-offline-symbolic.js';
import UserStatusPendingSymbolic from '../icons/user-status-pending-symbolic.js';
import UserTrashFullSymbolic from '../icons/user-trash-full-symbolic.js';
import UserTrashSymbolic from '../icons/user-trash-symbolic.js';
import UtilitiesTerminalSymbolic from '../icons/utilities-terminal-symbolic.js';
import ValueDecreaseSymbolic from '../icons/value-decrease-symbolic.js';
import ValueIncreaseSymbolic from '../icons/value-increase-symbolic.js';
import VideoDisplaySymbolic from '../icons/video-display-symbolic.js';
import VideoJoinedDisplaysSymbolic from '../icons/video-joined-displays-symbolic.js';
import VideoSingleDisplaySymbolic from '../icons/video-single-display-symbolic.js';
import VideoXGenericSymbolic from '../icons/video-x-generic-symbolic.js';
import ViewAppGridSymbolic from '../icons/view-app-grid-symbolic.js';
import ViewConcealSymbolic from '../icons/view-conceal-symbolic.js';
import ViewContinuousSymbolic from '../icons/view-continuous-symbolic.js';
import ViewDualSymbolic from '../icons/view-dual-symbolic.js';
import ViewFullscreenSymbolic from '../icons/view-fullscreen-symbolic.js';
import ViewGridSymbolic from '../icons/view-grid-symbolic.js';
import ViewListBulletSymbolic from '../icons/view-list-bullet-symbolic.js';
import ViewListOrderedSymbolic from '../icons/view-list-ordered-symbolic.js';
import ViewListSymbolic from '../icons/view-list-symbolic.js';
import ViewMirrorSymbolic from '../icons/view-mirror-symbolic.js';
import ViewMoreHorizontalSymbolic from '../icons/view-more-horizontal-symbolic.js';
import ViewMoreSymbolic from '../icons/view-more-symbolic.js';
import ViewPagedSymbolic from '../icons/view-paged-symbolic.js';
import ViewPinSymbolic from '../icons/view-pin-symbolic.js';
import ViewRefreshSymbolic from '../icons/view-refresh-symbolic.js';
import ViewRestoreSymbolic from '../icons/view-restore-symbolic.js';
import ViewRevealSymbolic from '../icons/view-reveal-symbolic.js';
import ViewSortAscendingSymbolic from '../icons/view-sort-ascending-symbolic.js';
import ViewSortDescendingSymbolic from '../icons/view-sort-descending-symbolic.js';
import ViewWrappedSymbolicRtl from '../icons/view-wrapped-symbolic-rtl.js';
import ViewWrappedSymbolic from '../icons/view-wrapped-symbolic.js';
import WeatherClearNightSymbolic from '../icons/weather-clear-night-symbolic.js';
import WeatherClearSymbolic from '../icons/weather-clear-symbolic.js';
import WeatherFewCloudsNightSymbolic from '../icons/weather-few-clouds-night-symbolic.js';
import WeatherFewCloudsSymbolic from '../icons/weather-few-clouds-symbolic.js';
import WeatherFogSymbolic from '../icons/weather-fog-symbolic.js';
import WeatherOvercastSymbolic from '../icons/weather-overcast-symbolic.js';
import WeatherSevereAlertSymbolic from '../icons/weather-severe-alert-symbolic.js';
import WeatherShowersScatteredSymbolic from '../icons/weather-showers-scattered-symbolic.js';
import WeatherShowersSymbolic from '../icons/weather-showers-symbolic.js';
import WeatherSnowSymbolic from '../icons/weather-snow-symbolic.js';
import WeatherStormSymbolic from '../icons/weather-storm-symbolic.js';
import WeatherTornadoSymbolic from '../icons/weather-tornado-symbolic.js';
import WeatherWindySymbolic from '../icons/weather-windy-symbolic.js';
import WebBrowserSymbolic from '../icons/web-browser-symbolic.js';
import WindowCloseSymbolic from '../icons/window-close-symbolic.js';
import WindowMaximizeSymbolic from '../icons/window-maximize-symbolic.js';
import WindowMinimizeSymbolic from '../icons/window-minimize-symbolic.js';
import WindowNewSymbolic from '../icons/window-new-symbolic.js';
import WindowRestoreSymbolic from '../icons/window-restore-symbolic.js';
import XOfficeAddressBookSymbolic from '../icons/x-office-address-book-symbolic.js';
import XOfficeCalendarSymbolic from '../icons/x-office-calendar-symbolic.js';
import XOfficeDocumentSymbolic from '../icons/x-office-document-symbolic.js';
import XOfficeDrawingSymbolic from '../icons/x-office-drawing-symbolic.js';
import XOfficePresentationSymbolic from '../icons/x-office-presentation-symbolic.js';
import XOfficeSpreadsheetSymbolic from '../icons/x-office-spreadsheet-symbolic.js';
import ZoomFitBestSymbolic from '../icons/zoom-fit-best-symbolic.js';
import ZoomInSymbolic from '../icons/zoom-in-symbolic.js';
import ZoomOriginalSymbolic from '../icons/zoom-original-symbolic.js';
import ZoomOutSymbolic from '../icons/zoom-out-symbolic.js';


export const Icons = {
  'ac-adapter': AcAdapterSymbolic,
  'accessories-calculator': AccessoriesCalculatorSymbolic,
  'accessories-character-map': AccessoriesCharacterMapSymbolic,
  'accessories-dictionary': AccessoriesDictionarySymbolic,
  'accessories-text-editor': AccessoriesTextEditorSymbolic,
  'action-unavailable': ActionUnavailableSymbolic,
  'address-book-new': AddressBookNewSymbolic,
  'airplane-mode': AirplaneModeSymbolic,
  alarm: AlarmSymbolic,
  'applets-screenshooter': AppletsScreenshooterSymbolic,
  'application-certificate': ApplicationCertificateSymbolic,
  'application-exit': ApplicationExitSymbolic,
  'application-rss-xml': ApplicationRssXmlSymbolic,
  'applications-engineering': ApplicationsEngineeringSymbolic,
  'applications-games': ApplicationsGamesSymbolic,
  'applications-graphics': ApplicationsGraphicsSymbolic,
  'applications-multimedia': ApplicationsMultimediaSymbolic,
  'applications-science': ApplicationsScienceSymbolic,
  'applications-system': ApplicationsSystemSymbolic,
  'applications-utilities': ApplicationsUtilitiesSymbolic,
  'application-x-addon': ApplicationXAddonSymbolic,
  'application-x-appliance': ApplicationXApplianceSymbolic,
  'application-x-executable': ApplicationXExecutableSymbolic,
  'application-x-firmware': ApplicationXFirmwareSymbolic,
  'appointment-missed': AppointmentMissedSymbolic,
  'appointment-new': AppointmentNewSymbolic,
  'appointment-soon': AppointmentSoonSymbolic,
  'audio-card': AudioCardSymbolic,
  'audio-headphones': AudioHeadphonesSymbolic,
  'audio-headset': AudioHeadsetSymbolic,
  'audio-input-microphone': AudioInputMicrophoneSymbolic,
  'audio-speakers': AudioSpeakersSymbolic,
  'audio-volume-high': AudioVolumeHighSymbolic,
  'audio-volume-low': AudioVolumeLowSymbolic,
  'audio-volume-medium': AudioVolumeMediumSymbolic,
  'audio-volume-muted': AudioVolumeMutedSymbolic,
  'audio-volume-overamplified': AudioVolumeOveramplifiedSymbolic,
  'audio-x-generic': AudioXGenericSymbolic,
  'auth-fingerprint': AuthFingerprintSymbolic,
  'auth-sim-locked': AuthSimLockedSymbolic,
  'auth-sim-missing': AuthSimMissingSymbolic,
  'auth-sim': AuthSimSymbolic,
  'auth-smartcard': AuthSmartcardSymbolic,
  'avatar-default': AvatarDefaultSymbolic,
  'battery-caution-charging': BatteryCautionChargingSymbolic,
  'battery-caution': BatteryCautionSymbolic,
  'battery-empty-charging': BatteryEmptyChargingSymbolic,
  'battery-empty': BatteryEmptySymbolic,
  'battery-full-charged': BatteryFullChargedSymbolic,
  'battery-full-charging': BatteryFullChargingSymbolic,
  'battery-full': BatteryFullSymbolic,
  'battery-good-charging': BatteryGoodChargingSymbolic,
  'battery-good': BatteryGoodSymbolic,
  'battery-level-0-charging': BatteryLevel0ChargingSymbolic,
  'battery-level-0': BatteryLevel0Symbolic,
  'battery-level-100-charged': BatteryLevel100ChargedSymbolic,
  'battery-level-100': BatteryLevel100Symbolic,
  'battery-level-10-charging': BatteryLevel10ChargingSymbolic,
  'battery-level-10': BatteryLevel10Symbolic,
  'battery-level-20-charging': BatteryLevel20ChargingSymbolic,
  'battery-level-20': BatteryLevel20Symbolic,
  'battery-level-30-charging': BatteryLevel30ChargingSymbolic,
  'battery-level-30': BatteryLevel30Symbolic,
  'battery-level-40-charging': BatteryLevel40ChargingSymbolic,
  'battery-level-40': BatteryLevel40Symbolic,
  'battery-level-50-charging': BatteryLevel50ChargingSymbolic,
  'battery-level-50': BatteryLevel50Symbolic,
  'battery-level-60-charging': BatteryLevel60ChargingSymbolic,
  'battery-level-60': BatteryLevel60Symbolic,
  'battery-level-70-charging': BatteryLevel70ChargingSymbolic,
  'battery-level-70': BatteryLevel70Symbolic,
  'battery-level-80-charging': BatteryLevel80ChargingSymbolic,
  'battery-level-80': BatteryLevel80Symbolic,
  'battery-level-90-charging': BatteryLevel90ChargingSymbolic,
  'battery-level-90': BatteryLevel90Symbolic,
  'battery-low-charging': BatteryLowChargingSymbolic,
  'battery-low': BatteryLowSymbolic,
  'battery-missing': BatteryMissingSymbolic,
  battery: BatterySymbolic,
  'bluetooth-active': BluetoothActiveSymbolic,
  'bluetooth-disabled': BluetoothDisabledSymbolic,
  'bluetooth-disconnected': BluetoothDisconnectedSymbolic,
  'bluetooth-hardware-disabled': BluetoothHardwareDisabledSymbolic,
  bluetooth: BluetoothSymbolic,
  'bookmark-new': BookmarkNewSymbolic,
  'call-incoming': CallIncomingSymbolic,
  'call-missed': CallMissedSymbolic,
  'call-outgoing': CallOutgoingSymbolic,
  'call-start': CallStartSymbolic,
  'call-stop': CallStopSymbolic,
  'camera-disabled': CameraDisabledSymbolic,
  'camera-hardware-disabled': CameraHardwareDisabledSymbolic,
  'camera-photo': CameraPhotoSymbolic,
  'camera-switch': CameraSwitchSymbolic,
  'camera-video': CameraVideoSymbolic,
  'camera-web': CameraWebSymbolic,
  'caps-lock': CapsLockSymbolic,
  'changes-allow': ChangesAllowSymbolic,
  'changes-prevent': ChangesPreventSymbolic,
  'channel-insecure': ChannelInsecureSymbolic,
  'channel-secure': ChannelSecureSymbolic,
  'chat-message-new': ChatMessageNewSymbolic,
  'checkbox-checked': CheckboxCheckedSymbolic,
  'checkbox-mixed': CheckboxMixedSymbolic,
  checkbox: CheckboxSymbolic,
  'colorimeter-colorhug': ColorimeterColorhugSymbolic,
  'color-select': ColorSelectSymbolic,
  'computer-apple-ipad': ComputerAppleIpadSymbolic,
  'computer-fail': ComputerFailSymbolic,
  computer: ComputerSymbolic,
  'contact-new': ContactNewSymbolic,
  'content-loading': ContentLoadingSymbolic,
  'daytime-sunrise': DaytimeSunriseSymbolic,
  'daytime-sunset': DaytimeSunsetSymbolic,
  'dialog-error': DialogErrorSymbolic,
  'dialog-information': DialogInformationSymbolic,
  'dialog-password': DialogPasswordSymbolic,
  'dialog-question': DialogQuestionSymbolic,
  'dialog-warning': DialogWarningSymbolic,
  'display-brightness': DisplayBrightnessSymbolic,
  'display-projector': DisplayProjectorSymbolic,
  'document-edit': DocumentEditSymbolic,
  'document-new': DocumentNewSymbolic,
  'document-open-recent': DocumentOpenRecentSymbolic,
  'document-open': DocumentOpenSymbolic,
  'document-page-setup': DocumentPageSetupSymbolic,
  'document-print-preview': DocumentPrintPreviewSymbolic,
  'document-print': DocumentPrintSymbolic,
  'document-properties': DocumentPropertiesSymbolic,
  'document-revert-rtl': DocumentRevertSymbolicRtl,
  'document-revert': DocumentRevertSymbolic,
  'document-save-as': DocumentSaveAsSymbolic,
  'document-save': DocumentSaveSymbolic,
  'document-send': DocumentSendSymbolic,
  'drive-harddisk-ieee1394': DriveHarddiskIeee1394Symbolic,
  'drive-harddisk-solidstate': DriveHarddiskSolidstateSymbolic,
  'drive-harddisk': DriveHarddiskSymbolic,
  'drive-harddisk-system': DriveHarddiskSystemSymbolic,
  'drive-harddisk-usb': DriveHarddiskUsbSymbolic,
  'drive-multidisk': DriveMultidiskSymbolic,
  'drive-optical': DriveOpticalSymbolic,
  'drive-removable-media': DriveRemovableMediaSymbolic,
  'edit-clear-all': EditClearAllSymbolic,
  'edit-clear-rtl': EditClearSymbolicRtl,
  'edit-clear': EditClearSymbolic,
  'edit-copy': EditCopySymbolic,
  'edit-cut': EditCutSymbolic,
  'edit-delete': EditDeleteSymbolic,
  'edit-find-replace': EditFindReplaceSymbolic,
  'edit-find': EditFindSymbolic,
  'edit-paste': EditPasteSymbolic,
  'edit-redo': EditRedoSymbolic,
  'edit-select-all': EditSelectAllSymbolic,
  'edit-select': EditSelectSymbolic,
  'edit-undo': EditUndoSymbolic,
  'emblem-default': EmblemDefaultSymbolic,
  'emblem-documents': EmblemDocumentsSymbolic,
  'emblem-favorite': EmblemFavoriteSymbolic,
  'emblem-important': EmblemImportantSymbolic,
  'emblem-music': EmblemMusicSymbolic,
  'emblem-ok': EmblemOkSymbolic,
  'emblem-photos': EmblemPhotosSymbolic,
  'emblem-shared': EmblemSharedSymbolic,
  'emblem-synchronizing': EmblemSynchronizingSymbolic,
  'emblem-system': EmblemSystemSymbolic,
  'emblem-videos': EmblemVideosSymbolic,
  'emoji-activities': EmojiActivitiesSymbolic,
  'emoji-body': EmojiBodySymbolic,
  'emoji-flags': EmojiFlagsSymbolic,
  'emoji-food': EmojiFoodSymbolic,
  'emoji-nature': EmojiNatureSymbolic,
  'emoji-objects': EmojiObjectsSymbolic,
  'emoji-people': EmojiPeopleSymbolic,
  'emoji-recent': EmojiRecentSymbolic,
  'emoji-symbols': EmojiSymbolsSymbolic,
  'emoji-travel': EmojiTravelSymbolic,
  'emote-love': EmoteLoveSymbolic,
  'error-correct': ErrorCorrectSymbolic,
  'eye-not-looking': EyeNotLookingSymbolic,
  'eye-open-negative-filled': EyeOpenNegativeFilledSymbolic,
  'face-angel': FaceAngelSymbolic,
  'face-angry': FaceAngrySymbolic,
  'face-confused': FaceConfusedSymbolic,
  'face-cool': FaceCoolSymbolic,
  'face-crying': FaceCryingSymbolic,
  'face-devilish': FaceDevilishSymbolic,
  'face-embarrassed': FaceEmbarrassedSymbolic,
  'face-glasses': FaceGlassesSymbolic,
  'face-kiss': FaceKissSymbolic,
  'face-laugh': FaceLaughSymbolic,
  'face-monkey': FaceMonkeySymbolic,
  'face-plain': FacePlainSymbolic,
  'face-raspberry': FaceRaspberrySymbolic,
  'face-sad': FaceSadSymbolic,
  'face-shutmouth': FaceShutmouthSymbolic,
  'face-sick': FaceSickSymbolic,
  'face-smile-big': FaceSmileBigSymbolic,
  'face-smile': FaceSmileSymbolic,
  'face-smirk': FaceSmirkSymbolic,
  'face-surprise': FaceSurpriseSymbolic,
  'face-tired': FaceTiredSymbolic,
  'face-uncertain': FaceUncertainSymbolic,
  'face-wink': FaceWinkSymbolic,
  'face-worried': FaceWorriedSymbolic,
  'face-yawn': FaceYawnSymbolic,
  'find-location': FindLocationSymbolic,
  'focus-legacy-systray': FocusLegacySystraySymbolic,
  'focus-top-bar': FocusTopBarSymbolic,
  'focus-windows': FocusWindowsSymbolic,
  'folder-documents': FolderDocumentsSymbolic,
  'folder-download': FolderDownloadSymbolic,
  'folder-drag-accept': FolderDragAcceptSymbolic,
  'folder-music': FolderMusicSymbolic,
  'folder-new': FolderNewSymbolic,
  'folder-open': FolderOpenSymbolic,
  'folder-pictures': FolderPicturesSymbolic,
  'folder-publicshare': FolderPublicshareSymbolic,
  'folder-remote': FolderRemoteSymbolic,
  'folder-saved-search': FolderSavedSearchSymbolic,
  folder: FolderSymbolic,
  'folder-templates': FolderTemplatesSymbolic,
  'folder-videos': FolderVideosSymbolic,
  'folder-visiting': FolderVisitingSymbolic,
  'font-select': FontSelectSymbolic,
  'font-x-generic': FontXGenericSymbolic,
  'format-indent-less': FormatIndentLessSymbolic,
  'format-indent-more': FormatIndentMoreSymbolic,
  'format-justify-center': FormatJustifyCenterSymbolic,
  'format-justify-fill': FormatJustifyFillSymbolic,
  'format-justify-left': FormatJustifyLeftSymbolic,
  'format-justify-right': FormatJustifyRightSymbolic,
  'format-text-bold': FormatTextBoldSymbolic,
  'format-text-direction-rtl': FormatTextDirectionSymbolicRtl,
  'format-text-direction': FormatTextDirectionSymbolic,
  'format-text-italic': FormatTextItalicSymbolic,
  'format-text-strikethrough': FormatTextStrikethroughSymbolic,
  'format-text-underline': FormatTextUnderlineSymbolic,
  'gnome-power-manager': GnomePowerManagerSymbolic,
  'goa-panel': GoaPanelSymbolic,
  'go-bottom': GoBottomSymbolic,
  'go-down': GoDownSymbolic,
  'go-first': GoFirstSymbolic,
  'go-home': GoHomeSymbolic,
  'go-jump-rtl': GoJumpSymbolicRtl,
  'go-jump': GoJumpSymbolic,
  'go-last': GoLastSymbolic,
  'go-next': GoNextSymbolic,
  'go-previous': GoPreviousSymbolic,
  'go-top': GoTopSymbolic,
  'go-up': GoUpSymbolic,
  'help-about': HelpAboutSymbolic,
  'help-browser': HelpBrowserSymbolic,
  'help-contents': HelpContentsSymbolic,
  'help-faq': HelpFaqSymbolic,
  'image-loading': ImageLoadingSymbolic,
  'image-x-generic': ImageXGenericSymbolic,
  'inode-directory': InodeDirectorySymbolic,
  'input-dialpad': InputDialpadSymbolic,
  'input-gaming': InputGamingSymbolic,
  'input-keyboard': InputKeyboardSymbolic,
  'input-mouse': InputMouseSymbolic,
  'input-tablet': InputTabletSymbolic,
  'input-touchpad': InputTouchpadSymbolic,
  'insert-image': InsertImageSymbolic,
  'insert-link': InsertLinkSymbolic,
  'insert-object': InsertObjectSymbolic,
  'insert-text': InsertTextSymbolic,
  'keyboard-brightness': KeyboardBrightnessSymbolic,
  'list-add': ListAddSymbolic,
  'list-drag-handle': ListDragHandleSymbolic,
  'list-remove-all': ListRemoveAllSymbolic,
  'list-remove': ListRemoveSymbolic,
  'location-services-active': LocationServicesActiveSymbolic,
  'location-services-disabled': LocationServicesDisabledSymbolic,
  'mail-attachment': MailAttachmentSymbolic,
  'mail-forward': MailForwardSymbolic,
  'mail-mark-important': MailMarkImportantSymbolic,
  'mail-mark-junk': MailMarkJunkSymbolic,
  'mail-mark-notjunk': MailMarkNotjunkSymbolic,
  'mail-message-new': MailMessageNewSymbolic,
  'mail-read': MailReadSymbolic,
  'mail-replied': MailRepliedSymbolic,
  'mail-reply-all': MailReplyAllSymbolic,
  'mail-reply-sender': MailReplySenderSymbolic,
  'mail-send-receive': MailSendReceiveSymbolic,
  'mail-send': MailSendSymbolic,
  'mail-unread': MailUnreadSymbolic,
  'mark-location': MarkLocationSymbolic,
  'media-eject': MediaEjectSymbolic,
  'media-flash': MediaFlashSymbolic,
  'media-floppy': MediaFloppySymbolic,
  'media-optical-bd': MediaOpticalBdSymbolic,
  'media-optical-cd-audio': MediaOpticalCdAudioSymbolic,
  'media-optical-dvd': MediaOpticalDvdSymbolic,
  'media-optical': MediaOpticalSymbolic,
  'media-playback-pause': MediaPlaybackPauseSymbolic,
  'media-playback-start-rtl': MediaPlaybackStartSymbolicRtl,
  'media-playback-start': MediaPlaybackStartSymbolic,
  'media-playback-stop': MediaPlaybackStopSymbolic,
  'media-playlist-consecutive': MediaPlaylistConsecutiveSymbolic,
  'media-playlist-repeat-song': MediaPlaylistRepeatSongSymbolic,
  'media-playlist-repeat': MediaPlaylistRepeatSymbolic,
  'media-playlist-shuffle': MediaPlaylistShuffleSymbolic,
  'media-record': MediaRecordSymbolic,
  'media-removable': MediaRemovableSymbolic,
  'media-seek-backward': MediaSeekBackwardSymbolic,
  'media-seek-forward': MediaSeekForwardSymbolic,
  'media-skip-backward': MediaSkipBackwardSymbolic,
  'media-skip-forward': MediaSkipForwardSymbolic,
  'media-tape': MediaTapeSymbolic,
  'media-view-subtitles': MediaViewSubtitlesSymbolic,
  'media-zip': MediaZipSymbolic,
  'microphone-disabled': MicrophoneDisabledSymbolic,
  'microphone-hardware-disabled': MicrophoneHardwareDisabledSymbolic,
  'microphone-sensitivity-high': MicrophoneSensitivityHighSymbolic,
  'microphone-sensitivity-low': MicrophoneSensitivityLowSymbolic,
  'microphone-sensitivity-medium': MicrophoneSensitivityMediumSymbolic,
  'microphone-sensitivity-muted': MicrophoneSensitivityMutedSymbolic,
  modem: ModemSymbolic,
  'multimedia-player-apple-ipod-touch': MultimediaPlayerAppleIpodTouchSymbolic,
  'multimedia-player': MultimediaPlayerSymbolic,
  'multimedia-volume-control': MultimediaVolumeControlSymbolic,
  'network-cellular-2g': NetworkCellular2gSymbolic,
  'network-cellular-3g': NetworkCellular3gSymbolic,
  'network-cellular-4g': NetworkCellular4gSymbolic,
  'network-cellular-acquiring': NetworkCellularAcquiringSymbolic,
  'network-cellular-connected': NetworkCellularConnectedSymbolic,
  'network-cellular-disabled': NetworkCellularDisabledSymbolic,
  'network-cellular-edge': NetworkCellularEdgeSymbolic,
  'network-cellular-gprs': NetworkCellularGprsSymbolic,
  'network-cellular-hardware-disabled': NetworkCellularHardwareDisabledSymbolic,
  'network-cellular-hspa': NetworkCellularHspaSymbolic,
  'network-cellular-no-route': NetworkCellularNoRouteSymbolic,
  'network-cellular-offline': NetworkCellularOfflineSymbolic,
  'network-cellular-signal-excellent': NetworkCellularSignalExcellentSymbolic,
  'network-cellular-signal-good': NetworkCellularSignalGoodSymbolic,
  'network-cellular-signal-none': NetworkCellularSignalNoneSymbolic,
  'network-cellular-signal-ok': NetworkCellularSignalOkSymbolic,
  'network-cellular-signal-weak': NetworkCellularSignalWeakSymbolic,
  'network-cellular': NetworkCellularSymbolic,
  'network-error': NetworkErrorSymbolic,
  'network-idle': NetworkIdleSymbolic,
  'network-no-route': NetworkNoRouteSymbolic,
  'network-offline': NetworkOfflineSymbolic,
  'network-receive': NetworkReceiveSymbolic,
  'network-server': NetworkServerSymbolic,
  'network-transmit-receive': NetworkTransmitReceiveSymbolic,
  'network-transmit': NetworkTransmitSymbolic,
  'network-vpn-acquiring': NetworkVpnAcquiringSymbolic,
  'network-vpn-no-route': NetworkVpnNoRouteSymbolic,
  'network-vpn': NetworkVpnSymbolic,
  'network-wired-acquiring': NetworkWiredAcquiringSymbolic,
  'network-wired-disconnected': NetworkWiredDisconnectedSymbolic,
  'network-wired-no-route': NetworkWiredNoRouteSymbolic,
  'network-wired-offline': NetworkWiredOfflineSymbolic,
  'network-wired': NetworkWiredSymbolic,
  'network-wireless-acquiring': NetworkWirelessAcquiringSymbolic,
  'network-wireless-connected': NetworkWirelessConnectedSymbolic,
  'network-wireless-disabled': NetworkWirelessDisabledSymbolic,
  'network-wireless-encrypted': NetworkWirelessEncryptedSymbolic,
  'network-wireless-hardware-disabled': NetworkWirelessHardwareDisabledSymbolic,
  'network-wireless-hotspot': NetworkWirelessHotspotSymbolic,
  'network-wireless-no-route': NetworkWirelessNoRouteSymbolic,
  'network-wireless-offline': NetworkWirelessOfflineSymbolic,
  'network-wireless-signal-excellent': NetworkWirelessSignalExcellentSymbolic,
  'network-wireless-signal-good': NetworkWirelessSignalGoodSymbolic,
  'network-wireless-signal-none': NetworkWirelessSignalNoneSymbolic,
  'network-wireless-signal-ok': NetworkWirelessSignalOkSymbolic,
  'network-wireless-signal-weak': NetworkWirelessSignalWeakSymbolic,
  'network-wireless': NetworkWirelessSymbolic,
  'network-workgroup': NetworkWorkgroupSymbolic,
  'night-light': NightLightSymbolic,
  'non-starred': NonStarredSymbolic,
  'notifications-disabled': NotificationsDisabledSymbolic,
  'object-flip-horizontal': ObjectFlipHorizontalSymbolic,
  'object-flip-vertical': ObjectFlipVerticalSymbolic,
  'object-rotate-left': ObjectRotateLeftSymbolic,
  'object-rotate-right': ObjectRotateRightSymbolic,
  'object-select': ObjectSelectSymbolic,
  'open-menu': OpenMenuSymbolic,
  'orientation-landscape-inverse': OrientationLandscapeInverseSymbolic,
  'orientation-landscape': OrientationLandscapeSymbolic,
  'orientation-portrait-inverse': OrientationPortraitInverseSymbolic,
  'orientation-portrait-left': OrientationPortraitLeftSymbolic,
  'orientation-portrait-right': OrientationPortraitRightSymbolic,
  'orientation-portrait': OrientationPortraitSymbolic,
  'package-x-generic': PackageXGenericSymbolic,
  'pan-down': PanDownSymbolic,
  'pan-end-rtl': PanEndSymbolicRtl,
  'pan-end': PanEndSymbolic,
  'pan-start-rtl': PanStartSymbolicRtl,
  'pan-start': PanStartSymbolic,
  'pan-up': PanUpSymbolic,
  pda: PdaSymbolic,
  'phone-apple-iphone': PhoneAppleIphoneSymbolic,
  'phone-old': PhoneOldSymbolic,
  phone: PhoneSymbolic,
  'power-profile-balanced': PowerProfileBalancedSymbolic,
  'power-profile-performance': PowerProfilePerformanceSymbolic,
  'power-profile-power-saver': PowerProfilePowerSaverSymbolic,
  'preferences-color': PreferencesColorSymbolic,
  'preferences-desktop-accessibility': PreferencesDesktopAccessibilitySymbolic,
  'preferences-desktop-apps': PreferencesDesktopAppsSymbolic,
  'preferences-desktop-display': PreferencesDesktopDisplaySymbolic,
  'preferences-desktop-font': PreferencesDesktopFontSymbolic,
  'preferences-desktop-keyboard-shortcuts': PreferencesDesktopKeyboardShortcutsSymbolic,
  'preferences-desktop-keyboard': PreferencesDesktopKeyboardSymbolic,
  'preferences-desktop-locale': PreferencesDesktopLocaleSymbolic,
  'preferences-desktop-remote-desktop': PreferencesDesktopRemoteDesktopSymbolic,
  'preferences-desktop-screensaver': PreferencesDesktopScreensaverSymbolic,
  'preferences-desktop-wallpaper': PreferencesDesktopWallpaperSymbolic,
  'preferences-other': PreferencesOtherSymbolic,
  'preferences-system-details': PreferencesSystemDetailsSymbolic,
  'preferences-system-devices': PreferencesSystemDevicesSymbolic,
  'preferences-system-network-proxy': PreferencesSystemNetworkProxySymbolic,
  'preferences-system-network': PreferencesSystemNetworkSymbolic,
  'preferences-system-notifications': PreferencesSystemNotificationsSymbolic,
  'preferences-system-parental-controls': PreferencesSystemParentalControlsSymbolic,
  'preferences-system-privacy': PreferencesSystemPrivacySymbolic,
  'preferences-system-search': PreferencesSystemSearchSymbolic,
  'preferences-system-sharing': PreferencesSystemSharingSymbolic,
  'preferences-system': PreferencesSystemSymbolic,
  'preferences-system-time': PreferencesSystemTimeSymbolic,
  'printer-error': PrinterErrorSymbolic,
  'printer-network': PrinterNetworkSymbolic,
  'printer-printing': PrinterPrintingSymbolic,
  printer: PrinterSymbolic,
  'printer-warning': PrinterWarningSymbolic,
  'process-stop': ProcessStopSymbolic,
  'process-working': ProcessWorkingSymbolic,
  'radio-checked': RadioCheckedSymbolic,
  'radio-mixed': RadioMixedSymbolic,
  radio: RadioSymbolic,
  'rotation-allowed': RotationAllowedSymbolic,
  'rotation-locked': RotationLockedSymbolic,
  scanner: ScannerSymbolic,
  'screen-shared': ScreenSharedSymbolic,
  'security-high': SecurityHighSymbolic,
  'security-low': SecurityLowSymbolic,
  'security-medium': SecurityMediumSymbolic,
  'selection-end': SelectionEndSymbolic,
  'selection-start': SelectionStartSymbolic,
  'semi-starred-rtl': SemiStarredSymbolicRtl,
  'semi-starred': SemiStarredSymbolic,
  'send-to': SendToSymbolic,
  'sidebar-hide': SidebarHideSymbolic,
  'sidebar-show': SidebarShowSymbolic,
  'software-update-available': SoftwareUpdateAvailableSymbolic,
  'software-update-urgent': SoftwareUpdateUrgentSymbolic,
  'star-new': StarNewSymbolic,
  starred: StarredSymbolic,
  'start-here': StartHereSymbolic,
  'switch-off': SwitchOff,
  'switch-on': SwitchOn,
  'system-file-manager': SystemFileManagerSymbolic,
  'system-help': SystemHelpSymbolic,
  'system-lock-screen': SystemLockScreenSymbolic,
  'system-log-out': SystemLogOutSymbolic,
  'system-reboot': SystemRebootSymbolic,
  'system-run': SystemRunSymbolic,
  'system-search': SystemSearchSymbolic,
  'system-shutdown': SystemShutdownSymbolic,
  'system-software-install': SystemSoftwareInstallSymbolic,
  'system-switch-user': SystemSwitchUserSymbolic,
  'system-users': SystemUsersSymbolic,
  'tab-new': TabNewSymbolic,
  'task-due': TaskDueSymbolic,
  'task-past-due': TaskPastDueSymbolic,
  'text-editor': TextEditorSymbolic,
  'text-x-generic': TextXGenericSymbolic,
  'thunderbolt-acquiring': ThunderboltAcquiringSymbolic,
  thunderbolt: ThunderboltSymbolic,
  'tools-check-spelling': ToolsCheckSpellingSymbolic,
  'touch-disabled': TouchDisabledSymbolic,
  'touchpad-disabled': TouchpadDisabledSymbolic,
  tv: TvSymbolic,
  'uninterruptible-power-supply': UninterruptiblePowerSupplySymbolic,
  'user-available': UserAvailableSymbolic,
  'user-away': UserAwaySymbolic,
  'user-bookmarks': UserBookmarksSymbolic,
  'user-busy': UserBusySymbolic,
  'user-desktop': UserDesktopSymbolic,
  'user-home': UserHomeSymbolic,
  'user-idle': UserIdleSymbolic,
  'user-info': UserInfoSymbolic,
  'user-invisible': UserInvisibleSymbolic,
  'user-not-tracked': UserNotTrackedSymbolic,
  'user-offline': UserOfflineSymbolic,
  'user-status-pending': UserStatusPendingSymbolic,
  'user-trash-full': UserTrashFullSymbolic,
  'user-trash': UserTrashSymbolic,
  'utilities-terminal': UtilitiesTerminalSymbolic,
  'value-decrease': ValueDecreaseSymbolic,
  'value-increase': ValueIncreaseSymbolic,
  'video-display': VideoDisplaySymbolic,
  'video-joined-displays': VideoJoinedDisplaysSymbolic,
  'video-single-display': VideoSingleDisplaySymbolic,
  'video-x-generic': VideoXGenericSymbolic,
  'view-app-grid': ViewAppGridSymbolic,
  'view-conceal': ViewConcealSymbolic,
  'view-continuous': ViewContinuousSymbolic,
  'view-dual': ViewDualSymbolic,
  'view-fullscreen': ViewFullscreenSymbolic,
  'view-grid': ViewGridSymbolic,
  'view-list-bullet': ViewListBulletSymbolic,
  'view-list-ordered': ViewListOrderedSymbolic,
  'view-list': ViewListSymbolic,
  'view-mirror': ViewMirrorSymbolic,
  'view-more-horizontal': ViewMoreHorizontalSymbolic,
  'view-more': ViewMoreSymbolic,
  'view-paged': ViewPagedSymbolic,
  'view-pin': ViewPinSymbolic,
  'view-refresh': ViewRefreshSymbolic,
  'view-restore': ViewRestoreSymbolic,
  'view-reveal': ViewRevealSymbolic,
  'view-sort-ascending': ViewSortAscendingSymbolic,
  'view-sort-descending': ViewSortDescendingSymbolic,
  'view-wrapped-rtl': ViewWrappedSymbolicRtl,
  'view-wrapped': ViewWrappedSymbolic,
  'weather-clear-night': WeatherClearNightSymbolic,
  'weather-clear': WeatherClearSymbolic,
  'weather-few-clouds-night': WeatherFewCloudsNightSymbolic,
  'weather-few-clouds': WeatherFewCloudsSymbolic,
  'weather-fog': WeatherFogSymbolic,
  'weather-overcast': WeatherOvercastSymbolic,
  'weather-severe-alert': WeatherSevereAlertSymbolic,
  'weather-showers-scattered': WeatherShowersScatteredSymbolic,
  'weather-showers': WeatherShowersSymbolic,
  'weather-snow': WeatherSnowSymbolic,
  'weather-storm': WeatherStormSymbolic,
  'weather-tornado': WeatherTornadoSymbolic,
  'weather-windy': WeatherWindySymbolic,
  'web-browser': WebBrowserSymbolic,
  'window-close': WindowCloseSymbolic,
  'window-maximize': WindowMaximizeSymbolic,
  'window-minimize': WindowMinimizeSymbolic,
  'window-new': WindowNewSymbolic,
  'window-restore': WindowRestoreSymbolic,
  'x-office-address-book': XOfficeAddressBookSymbolic,
  'x-office-calendar': XOfficeCalendarSymbolic,
  'x-office-document': XOfficeDocumentSymbolic,
  'x-office-drawing': XOfficeDrawingSymbolic,
  'x-office-presentation': XOfficePresentationSymbolic,
  'x-office-spreadsheet': XOfficeSpreadsheetSymbolic,
  'zoom-fit-best': ZoomFitBestSymbolic,
  'zoom-in': ZoomInSymbolic,
  'zoom-original': ZoomOriginalSymbolic,
  'zoom-out': ZoomOutSymbolic,
};

function Icon({ className, name, colored, ...rest }) {
  const Element = Icons[name]

  if (!Element) 
    return <span>Invalid name: {name}</span>

  return (
    <span className={cx('Icon', className, { colored })} {...rest}>
      <Element />
    </span>
  );
}

Icon.propTypes = {
  className: prop.string,
  /** The icon name */
  name: prop.string.isRequired,
  colored: prop.bool,
}

Icon.defaultProps = {
  colored: false,
}

export default Icon


const SVGR_LOADER = `!!@svgr/webpack?-svgo,+titleProp,+ref!`;
const ICON_PATH = `../assets/icons/`;

export function OptimizedIcon({ className, name, colored, ...rest }) {
  const [Element, setElement] = useState('div'); //null; Icons[name]

  useEffect(() => {
    if (!name) setElement(() => () => <span>Invalid name: {name}</span>);
    let canceled = false;
    import(
      /* webpackMode: "eager" */ `${SVGR_LOADER}${ICON_PATH}${name}.svg`
    )
      .then(module => module.default)
      .then(component => !canceled && setElement(component))
      .catch(() => setElement(() => () => <span>Failed to load: {name}</span>));
    return () => {
      canceled = true;
    };
  }, [name]);

  return (
    <span className={cx('Icon', className, { colored })} {...rest}>
      <Element />
    </span>
  );
}
