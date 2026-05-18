---
title: "Privacy-First Software: Why We Built ColorLenz Without Tracking"
description: "Most apps track you. ColorLenz doesn't. Learn why privacy matters for neurodivergent users and how on-device processing keeps your data safe."
pubDate: "May 18 2026"
heroImage: "../../assets/blog-placeholder-3.jpg"
---

When you use most apps, you're not the customer—you're the product. Your behavior is tracked, analyzed, and sold to advertisers. It's become so normal that we barely notice it anymore.

But for neurodivergent users, this constant tracking adds another layer of anxiety. You're not just using an app; you're being watched and profiled. Your focus settings, your stress times, your usage patterns—all of it is data.

We built ColorLenz differently. No tracking. No data collection. No ads. Just a tool that works for your brain, not against it.

## The Tracking Problem: How Most Apps Use Your Data

The average smartphone app requests access to your location, contacts, calendar, and photos. Most of this data is unnecessary for the app's core function—it's just valuable to advertisers.[1]

Even "free" apps on the Mac App Store often include tracking. According to research by Pew Research Center, 72% of smartphone users feel that most companies use personal data in ways that aren't transparent or controllable.[2]

Here's what happens with your data:

**Behavioral tracking:** Your actions are logged (how long you use the app, when you use it, what features you interact with)

**Device profiling:** Your device specs, OS version, and hardware are collected

**Cross-app tracking:** Advertisers link your data across multiple apps to build a comprehensive profile

**Location data:** Even if you deny location permission, some companies infer your location through IP addresses and WiFi networks

**Third-party sharing:** Your data is sold to data brokers, advertisers, and marketers

For neurodivergent users, this is particularly frustrating. You're already managing sensory input and anxiety. The last thing you need is the added mental burden of knowing you're being tracked and profiled.

## Why Neurodivergent Users Need Privacy

Neurodivergent people often experience higher levels of anxiety and sensory sensitivity. The knowledge that an app is tracking your behavior can:

**Increase anxiety:** Knowing you're being watched activates your threat-detection systems[3]

**Add cognitive load:** You have to maintain awareness of what data you're sharing, with whom

**Violate autonomy:** Privacy is part of control and safety—core needs for neurodivergent people with anxiety

**Create surveillance burden:** Marginalized communities (including neurodivergent people) historically face more surveillance, making privacy protection essential[4]

You deserve tools that respect your privacy, not profit from your data.

## How ColorLenz Works: Everything On-Device

ColorLenz operates on a simple principle: **your data never leaves your Mac**.

Here's how it works technically:

**Screen capture:** ColorLenz uses ScreenCaptureKit, Apple's official framework for capturing your display. This process happens locally—nothing is sent to our servers.

**GPU processing:** Your screen is processed using Metal, Apple's GPU acceleration framework. The color adjustments, contrast changes, and filter effects all happen on your graphics card, in memory.

**Real-time overlay:** The adjusted image is rendered as a transparent overlay on top of your apps. It's instantaneous and lightweight.

**No storage:** Frames are processed and immediately discarded. Nothing is written to disk. Nothing is logged. Nothing is sent anywhere.

**Offline functionality:** ColorLenz works without an internet connection. You don't need to authenticate, log in, or connect to our servers. Ever.

This means your screen activity, your usage patterns, your focus times—none of it is tracked. We literally have no visibility into how you use ColorLenz. We can't see your data because we don't collect it.

## Why On-Device Processing Matters

On-device processing is harder to build than cloud-based processing. It requires optimizing for local hardware, handling updates without a backend, and trusting users instead of monitoring them.

But it's the only ethical approach for a tool designed to help people with neurodiversity and anxiety. Your privacy isn't a feature—it's foundational.

## Apple's Privacy Protection

ColorLenz lives in the Mac App Store, which means it's subject to Apple's App Privacy standards. We're transparent about what we collect: nothing.

Your Mac is your trusted device. The data on it stays on it. That's the whole point.

## The Technical Reality: Why This Matters

Some companies claim to be "privacy-first," but they still collect aggregate data, device fingerprints, or crash reports that can be used to track you. We don't.

ColorLenz doesn't:
- Log crash reports to external servers
- Collect anonymous usage metrics
- Track feature usage or preferences
- Store any configuration in the cloud (it's local-only)
- Phone home for any reason

This makes us lighter, faster, and more respectful of your autonomy.

## Take Back Your Privacy

You shouldn't have to choose between having good tools and protecting your privacy. Tools designed for neurodivergent users should respect your need for safety and control.

If you're tired of apps that track you, collect your data, and sell your behavior, you deserve something better. Something built with your needs—not advertiser interests—in mind.

Your screen. Your data. Your choice.

---

## Sources

[1] Acquisti, A., Brandimarte, L., & Loewenstein, G. (2015). Privacy and human behavior in the age of information. *Science*, 347(6221), 509-514. — Comprehensive research on data collection practices and privacy.

[2] Pew Research Center. (2019). *Americans, The Internet and The Internet of Things*. *Pew Research Center*. — Survey data on consumer privacy concerns and company transparency.

[3] Williams, M. R., & Thayer, J. F. (2019). Executive function and physiological reactivity to psychological stress. *Frontiers in Psychology*, 10, 1531. — Research on anxiety and threat detection.

[4] Zuboff, S. (2019). *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power*. PublicAffairs. — Critical analysis of surveillance and privacy for marginalized communities.

[5] Apple Security Engineering and Architecture (SEAR). (2023). *Apple App Store Privacy Standards*. *Apple.com*. — Official Apple privacy guidelines for App Store apps.

[6] Apple Developer. (2022). ScreenCaptureKit Framework Documentation. *Apple Developer Documentation*. — Technical documentation on on-device screen processing.

[7] Electronic Frontier Foundation (EFF). (2023). *Privacy Badger and App Tracking Transparency*. *EFF.org*. — Research on app tracking practices and privacy protection.

---

*Learn how ColorLenz protects your privacy in our [support page](/support). Or check out [pricing](/pricing) to get started with a privacy-first screen filter.*
